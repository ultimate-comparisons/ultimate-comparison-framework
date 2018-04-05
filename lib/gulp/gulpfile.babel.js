import gulp from 'gulp'
import exec from 'gulp-exec';
import moment from 'moment';
import * as path from 'path';
import {exec as execSimple} from 'child_process';

import {citation} from './tasks/citation.babel';
import {determineColors} from "./tasks/determineColors.babel";
import {deleteFolderRecursive} from "./tasks/util.babel";
import {criteria} from "./tasks/criteria.babel";
import {developmentColumn} from "./tasks/developmentColumn.babel";
import yaml2json from "js-yaml";
import {readFileSync, writeFileSync} from "fs";

const argv = require('minimist')(process.argv.slice(2));
argv.dir = argv.dir || "";

const ucBaseRoot = __dirname.replace(path.join("lib", "gulp"), "");
const ucRoot = __dirname.replace(path.join(argv.dir, "lib", "gulp"), "");

const tmp = path.join(ucRoot, 'tmp');
const lib = path.join(ucBaseRoot, 'lib');

const paths = {
    json: path.join(tmp, 'data'),
    dist: path.join(ucRoot, 'dist'),
    data: path.join(ucRoot, 'data'),
    config: path.join(ucRoot, 'configuration'),
    mdToJson: path.join(lib, "md-to-json"),
    assets: path.join(ucBaseRoot, 'src/assets')
};

const names = {
    data: 'data.json',
    versionInformation: 'VersionInformation.ts',
    config: 'comparison.yml',
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
    let defaults = yaml2json.safeLoad(readFileSync(files.autoConfig, "utf8"));
    writeFileSync(path.join(paths.dist, names.configJson), JSON.stringify(defaults), "utf8");
    done();
}

function colors(done) {
    determineColors(files, done);
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
    const gradlew = path.join(paths.mdToJson, 'gradlew');
    execSimple(gradlew + " -q -b "
        + files.mdToJsonGradle
        + " md2json -PappArgs=\""
        + paths.data
        + ","
        + paths.json
        + ","
        + files.dataJson
        + ", 1, true\"",
        function (err, stdout, stderr) {
            writeFileSync(files.errorLog, JSON.stringify(stderr), "utf8");
            console.log(stdout);
            console.log(stderr);
            callback(err);
        });
}

function changeCitation(done) {
    citation(paths, files, done);
}

function changeCriteria(done) {
    criteria(files, done);
}

function copyDist(done) {
    const rootDist = path.join(ucRoot, 'dist');
    const nodeModuleDist = path.join(ucBaseRoot, 'dist');
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
gulp.task('default', gulp.series(copyDist, markdown, changeCriteria, colors, changeCitation, 'development-column', assets, config));
// --------------------------------------------------------------->

// DEVELOPMENT tasks --------------------------------------------------<
gulp.task('update-data', function () {
    gulp.watch(globs.markdown, gulp.series('default'));
});

gulp.task('update-config', function () {
    gulp.watch([globs.config, globs.defaultConfig], gulp.series(changeCriteria, colors, changeCitation, assets, config));
});

gulp.task('update-description', function () {
    gulp.watch(globs.description, gulp.series(changeCitation, assets, config));
});

gulp.task('update-style', function () {
    gulp.watch(globs.style, assets);
});

gulp.task('update-citation', function () {
    gulp.watch([globs.csl, globs.bib], gulp.series(changeCitation, assets, config));
});

gulp.task('update', gulp.parallel('update-data', 'update-config', 'update-description', 'update-citation', 'update-style'));

gulp.task('dev', gulp.series(copyDist, 'default', 'update'));
// --------------------------------------------------------------->