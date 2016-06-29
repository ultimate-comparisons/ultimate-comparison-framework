var gulp = require('gulp'),
    changed = require('gulp-changed'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    minifyhtml = require('gulp-minify-html'),
    minifyCss = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer')
    ts = require('gulp-typescript'),
    sass = require('gulp-sass'),
    del = require('del'),
    sourcemaps = require('gulp-sourcemaps'),
    gulpUtil = require('gulp-util'),
    markdown = require('gulp-markdown-to-json'),
    jsontransform = require('gulp-json-transform'),
    concatjson = require('gulp-concat-json'),
    run = require('run-sequence'),
    md2json = require('md-to-json'),
    exec = require('gulp-exec');

var paths = {
    src: 'app',
    dev: 'www',
    dist: 'dist',
    tmp: '.tmp',
    scripts: 'app/js',
    css: 'app/css',
    sass: 'app/sass',
    templates: 'app/templates',
    fonts: 'app/fonts'
};

var files = {
    index: './index.html',
    sass: {
        watch: './app/sass/**/*scss'
    },
    scripts: {
       main: 'gulpfile.js',
       watch: [
           './app/**/*.js',
           './app/**/*.js.map',
           './app/**/*.ts'],
       setup: ['systemjs.config.js']
    },
    node_modules_scripts: [
        './node_modules/es6-shim/**/es6-shim.min.js',
        './node_modules/zone.js/dist/zone.js',
        './node_modules/reflect-metadata/Reflect.js',
        './node_modules/systemjs/dist/system.src.js',
        './node_modules/rxjs/**/*.js',
        './node_modules/angular2-in-memory-web-api/**/*.js',
        './node_modules/@angular/**/*.js',
        './node_modules/ng2-select/**/*.js',
        './node_modules/angular2-modal/**/*.js'
    ],
    min_node_modules_scripts: [
        './node_modules/jquery/**/jquery.min.js',
        './node_modules/select2/**/select2.min.js',
        './node_modules/showdown/**/*.js'
    ],
    node_modules_styles: [
        './node_modules/ng2-select/**/*.css',
        './node_modules/bootstrap/**/*.css',
        './node_modules/select2/**/*.css',
    ],
    node_modules_fonts: [
        './node_modules/bootstrap/fonts/*'
    ],
    templates: ['./app/templates/**/*tpl.html'],
    css: ['./app/css/*.css'],
    data: ['./app/data/*.json'],
    markdown: {
        watch: './app/data/md/*.md'
    },
    json: ['./app/data/json/*.json'],
    typescripts:{
      watch: './app/**/*.ts'  
    }
}

var destfiles = {
    index: './www',
    templates: './www/app/templates',
    scripts: './www/app',
    css: './www/app/css',
    fonts: './www/app/fonts'
}

gulp.task('index', function(){
    return gulp.src(files.index)
        .pipe(changed(destfiles.index))
        .pipe(minifyhtml())
        .pipe(gulp.dest(destfiles.index)); 
});

gulp.task('templates', function() {
    return gulp.src(files.templates)
        //.pipe(changed(destfiles.templates))
        //.pipe(minifyhtml())
        .pipe(gulp.dest(destfiles.templates)); 
});

gulp.task('fonts', function() {
    return gulp.src(files.node_modules_fonts)
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest(destfiles.fonts))
        .pipe(gulp.dest(paths.fonts))
});

gulp.task('css', ['sass', 'npm:css'], function() {
    return gulp.src(files.css)
        .pipe(rename({dirname: ''}))
        //.pipe(changed(destfiles.css))
        .pipe(minifyCss())
        .pipe(gulp.dest(destfiles.css)); 
});

gulp.task('scripts', ['ts', 'setup:scripts'], function() {
    return gulp.src(files.scripts.watch)
        .pipe(changed(destfiles.scripts))
        //.pipe(uglify().on('error', gulpUtil.log))
        .pipe(gulp.dest(destfiles.scripts)); 
});

gulp.task('setup:scripts', function() {
    return gulp.src(files.scripts.setup)
        .pipe(changed(destfiles.scripts))
        //.pipe(uglify().on('error', gulpUtil.log))
        .pipe(gulp.dest(destfiles.index)); 
});

gulp.task('npm:scripts', ['min:npm:scripts'], function() {
    return gulp.src(files.node_modules_scripts, {base: '.'})
        .pipe(gulp.dest('./www'));
});

gulp.task('min:npm:scripts', function() {
    return gulp.src(files.min_node_modules_scripts, {base: '.'})
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest('./www/libs'))
        .pipe(gulp.dest('./libs'));
});

gulp.task('data', function() {
    return gulp.src(files.data)
        //.pipe(rename({dirname: ''}))
        .pipe(gulp.dest('./www/app/data')); 
});

// Compiler:
var tsProject = ts.createProject('tsconfig.json');
gulp.task('ts', function () {
    return gulp.src(files.typescripts.watch)
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject))
        //.pipe(rename({dirname: ''}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.src));
});

gulp.task('npm:css', function () {
    return gulp.src(files.node_modules_styles)
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest(paths.css));
})

gulp.task('sass', function () {
    return gulp.src(files.sass.watch)
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCss({
            compatibility: 'ie8'
        }))
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest(paths.src + '/css/'));
})

gulp.task('markdown', function(callback){
    var options = {
      continueOnError: false,
      pipeStdout: true
    }
    return gulp.src(files.markdown.watch)
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

gulp.task('build-json', function(callback){
    run('markdown', 'json', 'data', callback);
})

gulp.task('clean', function() {
    gulp.src(paths.dev, {read: false})
        .pipe(clean());
});

gulp.task('default', ['index', 'scripts', 'npm:scripts', 'templates', 'css', 'fonts', 'build-json'], function(){});
gulp.task('dev', ['default'], function() {
    gulp.watch(files.typescripts.watch, ['scripts']);
    gulp.watch(files.sass.watch, ['css']);
    gulp.watch(files.markdown.watch, ['build-json']);
});

