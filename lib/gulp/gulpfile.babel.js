import gulp from 'gulp'
import exec from 'gulp-exec';
import moment from 'moment';
import * as path from 'path';
import { exec as execSimple } from 'child_process';
import { deleteFolderRecursive } from "./tasks/util.babel";
import { criteria } from "./tasks/criteria.babel";
import { developmentColumn } from "./tasks/developmentColumn.babel";
import yaml2json from "js-yaml";
import { existsSync, readFileSync, mkdirSync, writeFileSync } from "fs";
import { Configuration } from "./model/model.module";

const argv = require('minimist')(process.argv.slice(2));
argv.dir = argv.dir || "";

const nodeModulesRootDirectory = __dirname.replace(path.join("lib", "gulp"), "");

console.log("installedRootDirectory")
var installedRootDirectory;
if (argv.dir === "") {
    installedRootDirectory = nodeModulesRootDirectory;
} else {
    installedRootDirectory = nodeModulesRootDirectory.replace(argv.dir + "/", "");
}
console.log(installedRootDirectory)
if (installedRootDirectory.indexOf("node_modules") >= 0) {
    // we live in node_modules/ --> UC was installed using "npm install" --> the data is two levels up
    installedRootDirectory = installedRootDirectory.replace("node_modules/ultimate-comparison/",  "")
    installedRootDirectory = installedRootDirectory.replace("node_modules\\ultimate-comparison\\",  "")
}
console.log(installedRootDirectory)

const tmp = path.join(installedRootDirectory, 'tmp');
const lib = path.join(nodeModulesRootDirectory, 'lib');

const paths = {
    json: path.join(tmp, 'data'),
    dist: path.join(installedRootDirectory, 'dist'),
    data: path.join(installedRootDirectory, 'data'),
    config: path.join(installedRootDirectory, 'configuration'),
    mdToJson: path.join(lib, "md-to-json"),
    assets: path.join(nodeModulesRootDirectory, 'src/assets')
};

const names = {
    data: 'data.json',
    versionInformation: 'VersionInformation.ts',
    config: 'comparison.yml',
    defaultConfig: 'comparison-default.yml',
    autoConfig: 'comparison-auto-config.yml',
    configJson: 'comparison.json'
};

const files = {
    markdown: [
        path.join(paths.data, '*.md')
    ],
    json: [
        path.join(tmp, 'data', '*.json')
    ],
    config: path.join(paths.config, names.config),
    style: path.join(paths.config, 'style.css'),
    defaultConfig: path.join(paths.config, 'comparison-default.yml'),
    description: path.join(paths.config, 'description.md'),
    mdToJsonGradle: path.join(lib, 'md-to-json/build.gradle'),
    dataJson: path.join(paths.dist, names.data),
    autoConfig: path.join(paths.config, names.autoConfig),
    versionInformation: path.join(paths.assets, names.versionInformation),
    errorLog: path.join(tmp, 'error.log')
};

const globs = {
    markdown: path.join(paths.data, '/**/', '*.md'),
    config: path.join(paths.config, names.config),
    defaultConfig: path.join(paths.config, names.defaultConfig),
    description: path.join(paths.config, '/**/', 'description.md'),
    style: path.join(paths.config, '/**/', 'style.css'),
    bib: path.join(paths.data, '/**/', '*.bib'),
    csl: path.join(paths.data, '/**/', '*.csl')
};

// BUILD / UPDATE data files -------------------------------------<
function assets() {
    return gulp.src([files.description, files.style])
        .pipe(gulp.dest(paths.dist));
}

function config(done) {
    const userConfig = Configuration.load(yaml2json.safeLoad(readFileSync(files.config, "utf8")));
    const autoConfig = Configuration.load(yaml2json.safeLoad(readFileSync(files.autoConfig, "utf8")));
    userConfig.combine(autoConfig);
    writeFileSync(path.join(paths.dist, names.configJson), JSON.stringify(userConfig.json()), "utf8");
    done();
}

gulp.task('release', function () {
    const version = argv.tag;
    const date = moment().format("YYYY-MM-DD");
    if (typeof(version) === 'undefined' || version === null || version === 'undefined') {
        throw new Error('Undefined argument tag use: `npm run release -- --tag=x.x.x`');
    }
    return gulp.src(files.versionInformation)
        .pipe(gulp.dest(paths.assets))
        .pipe(exec('sed -i\'.bak\' "s/tag = \\".*\\"/tag = \\"v' + version + '\\"/g" ' + files.versionInformation))
        .pipe(exec('sed -i\'.bak\' "s/tagDate = \\".*\\"/tagDate = \\"' + date + '\\"/g" ' + files.versionInformation))
        .pipe(exec('sed -i\'.bak\' -E "s/(tagLink = \\".*)\\/v.*\\"/\\1\\/v' + version + '\\"/" ' + files.versionInformation));
});

function markdown(callback) {
    deleteFolderRecursive(paths.json);
    const command = path.join(paths.mdToJson, 'gradlew') + " -q -b "
        + files.mdToJsonGradle
        + " run --args=\""
        + "--input " + paths.data
        + " --output " + files.dataJson
        + " --tmp " + paths.json
        + " --children {item:{1:false}}"
        + " --plainChildren {item:{1:true},header:{3:true}}\"";
    console.log(command)
    execSimple(command,
        function (err, stdout, stderr) {
            if (!existsSync(tmp)) {
                mkdirSync(tmp);
            }
            writeFileSync(files.errorLog, JSON.stringify(stderr), "utf8");
            console.log(stdout);
            console.log(stderr);
            callback(err);
        });
}

function changeCriteria(done) {
    criteria(paths, files, done);
}

function copyDist(done) {
    const rootDist = path.join(installedRootDirectory, 'dist');
    const nodeModuleDist = path.join(nodeModulesRootDirectory, 'dist');
    if (rootDist === nodeModuleDist) {
        return done();
    } else {
        return gulp.src([path.join(nodeModuleDist, '**/*')]).pipe(gulp.dest(rootDist));
    }
}

gulp.task('development-column', function (done) {
    developmentColumn(files, done);
});
// --------------------------------------------------------------->

// DEFAULT task --------------------------------------------------<
gulp.task('default', gulp.series(copyDist, markdown, changeCriteria, 'development-column', assets, config));
// --------------------------------------------------------------->

// DEVELOPMENT tasks --------------------------------------------------<
gulp.task('update-data', function () {
    gulp.watch(globs.markdown, gulp.series('default'));
});

gulp.task('update-config', function () {
    gulp.watch([globs.config, globs.defaultConfig], gulp.series(changeCriteria, assets, config));
});

gulp.task('update-description', function () {
    gulp.watch(globs.description, gulp.series(changeCriteria, assets, config));
});

gulp.task('update-style', function () {
    gulp.watch(globs.style, assets);
});

gulp.task('update-citation', function () {
    gulp.watch([globs.csl, globs.bib], gulp.series(changeCriteria, assets, config));
});

gulp.task('update', gulp.parallel('update-data', 'update-config', 'update-description', 'update-citation', 'update-style'));

gulp.task('dev', gulp.series(copyDist, 'default', 'update'));
// --------------------------------------------------------------->
