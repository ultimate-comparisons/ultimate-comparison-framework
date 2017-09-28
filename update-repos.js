const Github = require('github-api');
const Git = require('simple-git');
const git = Git('..');
const async = require('async');
const fs = require('fs');

/****************************************************
 *                 DEFINITIONS                      *
 ****************************************************/

/**
 * Deletes a directory recursively, meaning it first deletes all content and afterwards the directory itself.
 * Works also on pure files.
 * @param path Path to the directory to be deleted.
 */
function deleteRecursive(path) {
    if (fs.existsSync(path)) {
        fs.readdirSync(path).forEach(function(file){
            const curPath = path + "/" + file;
            if (fs.lstatSync(curPath).isDirectory()) { // recurse
                deleteRecursive(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
}

/**
 * Copy the content of a directory into another directory.
 * It only replaces files in {@code targetRoot} and does not delete any other files.
 * Preferred way to be called via {@see mergeDirs}.
 * @param sourceDir Directory whose content should be copied
 * @param targetRoot Directory that should contain the content of {@code sourceDir}
 */
function copyDir(sourceDir, targetRoot) {
    const sourceFiles = fs.readdirSync(sourceDir);
    for (const file of sourceFiles) {
        if (fs.lstatSync(`${sourceDir}/${file}`).isDirectory()) {
            if (!fs.existsSync(`${targetRoot}/${file}`) || !fs.lstatSync(`${targetRoot}/${file}`).isDirectory()) {
                fs.mkdirSync(`${targetRoot}/${file}`);
            }
            copyDir(`${sourceDir}/${file}`, `${targetRoot}/${file}`)
        } else {
            fs.createReadStream(`${sourceDir}/${file}`).pipe(fs.createWriteStream(`${targetRoot}/${file}`))
        }
    }
}

/**
 * Wrapper for {@link copyDir} to check if both parameters are directories.
 * @param source Source of the content
 * @param target Should contain the content afterwards
 */
function mergeDirs(source, target) {
    if (!fs.lstatSync(source).isDirectory() || !fs.lstatSync(target).isDirectory()) {
        console.error(`mergeDirs: source "${source}" and target "${target}" have to be directories!`);
        return;
    }
    copyDir(source, target);
}

/**
 * Reform current branch to update branch
 * @param gt reference to git repo with simple-git.Git
 * @param cb callback
 */
function makeUpdate(gt, cb) {
    const path = gt._baseDir;
    const ignores = [
        'comparison-configuration',
        'comparison-elements',
        'README.md',
        'README-THING.template.md',
        '.travis.yml',
        'id_rsa.enc',
        'LICENSE',
        'citation/acm-siggraph.csl',
        'citation/default.bib'
    ];
    for (const ignore of ignores) {
        deleteRecursive(`${path}/${ignore}`);
    }

    fs.readdirSync('.').filter(f => ignores.indexOf(f) === -1).forEach(file => {
        if (fs.statSync(file).isDirectory()) {
            mergeDirs(file, path);
        } else {
            fs.createReadStream(file).pipe(fs.createWriteStream(`${path}/${file}`));
        }
    });

    gt.add(path).then(function () {
        gt.commit('Travis commit for travis-update').then(function () {
            gt.push('origin', 'travis-update').then(function () {
                cb();
            });
        });
    });
}

/****************************************************
 *                 SCRIPT START                     *
 ****************************************************/

if (process.argv.length <= 2) {
    console.error('Usage: node update-repos.js API_TOKEN');
    process.exit(1)
}
const apiToken = process.argv[2];

const gh = new Github({
    token: apiToken
});
const uc = gh.getOrganization('ultimate-comparisons');
uc.getRepos().then(rs => {
    const repos = rs.data
        .map(r => { return { fullname: r.full_name, name: r.full_name.split('/')[1]}; })
        .filter(r => r.name !== 'ultimate-comparison-BASE');

    async.eachOf(repos, function (repo, index, cb) {
        git.clone(`git@github.com:${repo.fullname}.git`, function () {
            const gt = Git('../' + repo.name);
            gt.branch(function (err, branches) {
                if (err) {
                    console.error(err);
                }
                if (branches.branches.keys().indexOf('travis-update') === -1) {
                    gt.checkoutLocalBranch('travis-update', function () {
                        makeUpdate(gt, cb);
                    });
                } else {
                    gt.checkout('travis-update', function () {
                        makeUpdate(gt, cb);
                    });
                }
            })
        });
    }, function (err) {
        if (err) {
            console.error(err);
        }

        const foreignRepos = fs.readFileSync('repos-to-update.list', {encoding: 'utf8'})
            .split('\n')
            .map(e => e.trim())
            .filter(e => !e.startsWith('#') && e.length > 0)
            .map(e => { return {fullname: e, name: e.split('/')[1]}; });

        async.eachOf(repos, function (repo, index, cb) {
            git.clone(`git@github.com:${repo.fullname}.git`, function () {
                const gt = Git('../' + repo.name);
                gt.branch(function (err, branches) {
                    if (err) {
                        console.error(err);
                    }
                    if (branches.branches.keys().indexOf('travis-update') === -1) {
                        gt.checkoutLocalBranch('travis-update', function () {
                            makeUpdate(gt, cb);
                        });
                    } else {
                        gt.checkout('travis-update', function () {
                            makeUpdate(gt, cb);
                        });
                    }
                })
            });
        }, function (err) {
            if (err) {
                console.error(err);
            }
        });
    });
}).catch(err => {
    console.error(err);
    process.exit(2);
});
