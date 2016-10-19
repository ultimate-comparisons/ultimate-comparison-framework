var gulp = require('gulp'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    ts = require('gulp-typescript'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    jsontransform = require('gulp-json-transform'),
    concatjson = require('gulp-concat-json'),
    run = require('run-sequence'),
    exec = require('gulp-exec'),
    tsConfig = require('./tsconfig'),
    bibtex2json = require('./citation/bibtex2json'),
    fs = require('fs');

var paths = {
    src: 'app',
    dev: 'www',
    json: 'comparison-elements-json/',
    data: 'app/components/comparison/data/'
};

var files = {
    index: './index.html',
    systemjs: [
        './systemjs.config.js',
    ],
    typescripts: [
        './app/**/*.ts'
    ],
    scripts: [
        './app/**/*.js',
        './app/**/*.js.map',
    ],
    templates: [
        './app/**/*.html'
    ],
    css: [
        './app/**/*.css'
    ],
    data: [
        './app/components/comparison/data/*.json',
        './comparison-configuration/*',
        './citation/output/*'
    ],
    markdown: [
        './comparison-elements/*.md'
    ],
    json: [
        './comparison-elements-json/*.json'
    ],
    node_modules_scripts: [
        './node_modules/es6-shim/**/es6-shim.min.js',
        './node_modules/zone.js/dist/zone.js',
        './node_modules/reflect-metadata/Reflect.js',
        './node_modules/systemjs/dist/system.src.js',
        './node_modules/rxjs/**/*.js',
        './node_modules/angular2-in-memory-web-api/**/*.js',
        './node_modules/@angular/**/*.js',
        './node_modules/select2/**/*.js',
        './node_modules/jquery/**/*.js',
        './node_modules/file-saver/**/*js',
        './node_modules/showdown/**/*.js',
        './node_modules/npm-polymer-elements/**/*',
         "./node_modules/@vaadin/angular2-polymer/**/*",
         "./node_modules/angular2-select/**/*"
    ]
}

var destfiles = {
    index: './www',
    app: './www/app'
}

// BUILD / UPDATE standard files ---------------------------------<
gulp.task('build-standard', ['ts'], function () {})

gulp.task('update-standard', function () {
    gulp.watch(files.typescripts, ['ts']);
})

gulp.task('ts', function () {
    var tsProject = ts.createProject('tsconfig.json');
    return tsProject.src()
        .pipe(sourcemaps.init()) 
        .pipe(ts(tsConfig.compilerOptions))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.src));     
});

// END BUILD standard files -------------------------------------->

// BUILD / UPDATE data files -------------------------------------<
gulp.task('build-data', function (callback) {
    run('markdown', 'json', callback);
})

gulp.task('update-data', function () {
    gulp.watch(files.markdown, ['build-data']);
})

gulp.task('markdown', function(callback){
    var options = {
      continueOnError: false,
      pipeStdout: true
    }
    return gulp.src(files.markdown)
    .pipe(exec("./gradlew -q -b ./app/java/md-to-json/build.gradle run -PappArgs=\"[$/\n<%= file.contents.toString() %>\n/$, 1, true]\"", options))
    .pipe(rename({extname: ".json"}))
    .pipe(gulp.dest(paths.json));
});

gulp.task('json', function(){
    return gulp.src(files.json)
        .pipe(concatjson("data.json"))
        .pipe(jsontransform(function(data){
            return data;
        }, 2))
        .pipe(gulp.dest(paths.data))
})

gulp.task('citation', function(){
    var fileContent = JSON.parse(fs.readFileSync("./citation/config.json", "utf8"));
    bibtex2json.parse('./citation/' + fileContent.bibtex_file, 'utf8', './citation/' + fileContent.bibtex_style, './citation/output');
})
// --------------------------------------------------------------->

// BUILD / UPDATE www folder -------------------------------------<
gulp.task('build-www', ['index', 'systemjs', 'typescripts', 'scripts', 'css', 'templates', 'data', 'npm:scripts'], function () {})

gulp.task('update-www', function () {
    gulp.watch(files.index, ['index']);
    gulp.watch(files.typescripts, ['typescripts']);
    gulp.watch(files.css, ['css']);
    gulp.watch(files.templates, ['templates']);
    gulp.watch(files.data, ['data']);
})

gulp.task('index', function(){
    return gulp.src(files.index)
        .pipe(gulp.dest(destfiles.index)); 
});

gulp.task('systemjs', function(){
    return gulp.src(files.systemjs)
        .pipe(gulp.dest(destfiles.index))
})

gulp.task('typescripts', function() {
    return gulp.src(files.typescripts)
        .pipe(gulp.dest(destfiles.app)); 
});

gulp.task('scripts', function() {
    return gulp.src(files.scripts)
        .pipe(gulp.dest(destfiles.app));
});

gulp.task('npm:scripts', function() {
    return gulp.src(files.node_modules_scripts, {base: '.'})
        .pipe(gulp.dest(destfiles.index));
});

gulp.task('css', function() {
    return gulp.src(files.css)
        .pipe(gulp.dest(destfiles.app)); 
});

gulp.task('templates', function() {
    return gulp.src(files.templates)
        .pipe(gulp.dest(destfiles.app)); 
});

gulp.task('data', function() {
    return gulp.src(files.data, {base: '.'})
        .pipe(gulp.dest(destfiles.index)); 
});
// --------------------------------------------------------------->

// DELETE www folder ---------------------------------------------<
gulp.task('delete-www', function() {
    return gulp.src(paths.dev, {read: false})
        .pipe(clean());
});
// --------------------------------------------------------------->

// DEFAULT and DEV tasks -----------------------------------------<
gulp.task('default', function(callback){
    run('build-data', 'build-standard', 'delete-www','build-www', callback);
});

gulp.task('dev', ['default'], function(callback) {
    run('update-standard', 'update-data', 'update-www', callback);
});
// --------------------------------------------------------------->