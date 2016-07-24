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
    tsConfig = require('./tsconfig');

var paths = {
    src: 'app',
    dev: 'www',
    css: 'app/css',
    sass: 'app/sass',
    templates: 'app/templates',
    fonts: 'app/fonts'
};

var files = {
    index: './index.html',
    systemjs: [
        './systemjs.config.js',
    ],
    fonts: [
        './app/fonts/*'
    ],
    sass: [
        './app/sass/**/*scss'
    ],
    typescripts: [
        './app/**/*.ts'
    ],
    scripts: [
        './app/**/*.js',
        './app/**/*.js.map',
    ],
    templates: [
        './app/templates/**/*tpl.html'
    ],
    css: [
        './app/**/*.css'
    ],
    data: [
        './app/data/*.json'
    ],
    markdown: [
        './app/data/md/*.md'
    ],
    json: [
        './app/data/json/*.json'
    ],
    node_modules_scripts: [
        './node_modules/es6-shim/**/es6-shim.min.js',
        './node_modules/zone.js/dist/zone.js',
        './node_modules/reflect-metadata/Reflect.js',
        './node_modules/systemjs/dist/system.src.js',
        './node_modules/rxjs/**/*.js',
        './node_modules/angular2-in-memory-web-api/**/*.js',
        './node_modules/@angular/**/*.js',
        './node_modules/ng2-select/**/*.js',
        './node_modules/angular2-modal/**/*.js',
        './node_modules/ng2-bootstrap/**/*.js',
        './node_modules/select2/**/*.js',
        './node_modules/jquery/**/*.js',
        './node_modules/showdown/**/*.js',
        './node_modules/npm-polymer-elements/**/*',
         "./node_modules/@vaadin/angular2-polymer/**/*"
    ],
    node_modules_styles: [
        './node_modules/ng2-select/**/*.css',
        './node_modules/bootstrap/**/*.css',
        './node_modules/select2/**/*.css',
    ],
    node_modules_fonts: [
        './node_modules/bootstrap/fonts/*'
    ]
}

var destfiles = {
    index: './www',
    app: './www/app',
    templates: './www/app/templates',
    css: './www/app/css',
    fonts: './www/app/fonts',
    data: './www/app/data'
}

// BUILD / UPDATE standard files ---------------------------------<
gulp.task('build-standard', ['ts', 'sass', 'npm:fonts', 'npm:css'], function () {})

gulp.task('update-standard', function () {
    gulp.watch(files.typescripts, ['ts']);
    gulp.watch(files.sass, ['sass']);  
})


gulp.task('ts', function () {
    var tsProject = ts.createProject('tsconfig.json');
    return tsProject.src()
        .pipe(sourcemaps.init()) 
        .pipe(ts(tsConfig.compilerOptions))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.src));     
});

gulp.task('npm:fonts', function() {
    return gulp.src(files.node_modules_fonts)
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest(paths.fonts))
});

gulp.task('sass', function () {
    return gulp.src(files.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest(paths.css));
})

gulp.task('npm:css', function () {
    return gulp.src(files.node_modules_styles)
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest(paths.css));
})
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
    .pipe(exec("gradle -q -b ./app/java/md-to-json/build.gradle run -PappArgs=\"[$/\n<%= file.contents.toString() %>\n/$, 1, true]\"", options))
    .pipe(rename({extname: ".json"}))
    .pipe(gulp.dest('./app/data/json/'));
});

gulp.task('json', function(){
    return gulp.src(files.json)
        .pipe(concatjson("Data.json"))
        .pipe(jsontransform(function(data){
            return data;
        }, 2))
        .pipe(gulp.dest('./app/data/'))
})
// --------------------------------------------------------------->

// BUILD / UPDATE www folder -------------------------------------<
gulp.task('build-www', ['index', 'systemjs', 'typescripts', 'scripts', 'css', 'templates', 'data', 'fonts', 'npm:scripts'], function () {})

gulp.task('update-www', function () {
    gulp.watch(files.index, ['index']);
    gulp.watch(files.typescripts, ['typescripts']);
    gulp.watch(files.index, ['index']);
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

gulp.task('fonts', function(){
    return gulp.src(files.fonts)
        .pipe(gulp.dest(destfiles.fonts))
})

gulp.task('css', function() {
    return gulp.src(files.css)
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest(destfiles.css)); 
});

gulp.task('templates', function() {
    return gulp.src(files.templates)
        .pipe(gulp.dest(destfiles.templates)); 
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