var gulp = require('gulp'),
    rename = require('gulp-rename'),
    jsontransform = require('gulp-json-transform'),
    concatjson = require('gulp-concat-json'),
    clean = require('gulp-clean'),
    run = require('run-sequence'),
    exec = require('gulp-exec'),
    bibtex2json = require('./citation/bibtex2json'),
    fs = require('fs'),
    sh = require('sync-exec');

var paths = {
    src: 'app',
    dev: 'www',
    json: 'comparison-elements-json/',
    data: 'app/components/comparison/data/'
};

var files = {
    data: [
        './app/components/comparison/data/*.json',
        './comparison-configuration/*',
        './citation/output/*',
        './favicon.ico'
    ],
    markdown: [
        './comparison-elements/*.md'
    ],
    json: [
        './comparison-elements-json/*.json'
    ]
}

var destfiles = {
    index: './www'
}

// BUILD / UPDATE data files -------------------------------------<
gulp.task('build-data', function (callback) {
    run('versioninfo', 'determinecolors', 'markdown', 'json', 'citation', callback);
})

gulp.task('determinecolors', function() {
    var factor = 0.5;
    var input = './comparison-configuration/table.json';
    var colorArray = [
        'hsl(174, 100%, 88%)',
        'hsl(257, 100%, 88%)',
        'hsl(23, 100%, 88%)',
        'hsl(70, 100%, 88%)',
        'hsl(227, 100%, 88%)',
        'hsl(92, 100%, 88%)',
        'hsl(277, 100%, 88%)',
        'hsl(113, 100%, 88%)',
        'hsl(39, 100%, 88%)',
        'hsl(193, 100%, 88%)',
        'hsl(149, 100%, 88%)',
        'hsl(244, 100%, 88%)',
        'hsl(54, 100%, 88%)',
        'hsl(272, 100%, 88%)',
        'hsl(287, 100%, 88%)',
        'hsl(207, 100%, 88%)',
        'hsl(312, 100%, 88%)'
    ];
    var color;
    var startColor = color = 0;
    var data = JSON.parse(fs.readFileSync(input, "utf8"));
    var changed = false;
    for (var i = 0; i < data.length; i++) {
        color = startColor;
        var o = data[i];
        if (o.type.tag === "label" && o.type.values != null) {
            for (var j = 0; j < o.type.values.length; j++) {
                var v = o.type.values[j];
                if (!(v.hasOwnProperty("class") || v.hasOwnProperty("color"))) {
                    v.color = colorArray[color];
                    color = (color + 1) % colorArray.length;
                    changed = true;
                }
            }
        }
    }
    if (changed) {
        fs.writeFileSync(input, JSON.stringify(data, null, 4), "utf8");
    }
    return true;
})

gulp.task('versioninfo', function () {
    var versionfile = './app/VersionInformation.ts.example';
    var output = './app/VersionInformation.ts';
    var revision = sh('git rev-parse HEAD');
    var date = sh('git log -1 --format=%cd --date=short');
    return gulp.src(versionfile)
        .pipe(rename(output))
        .pipe(gulp.dest('.'))
        .pipe(exec('sed -i "s/§§date§§/' + date.stdout.trim() + '/" ' + output))
        .pipe(exec('sed -i "s/§§commit§§/' + revision.stdout.trim() + '/g" ' + output));
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

gulp.task('citation', function(callback){
    var fileContent = JSON.parse(fs.readFileSync("./citation/config.json", "utf8"));
    bibtex2json.parse('./citation/' + fileContent.bibtex_file, 'utf8', './citation/' + fileContent.bibtex_style, './citation/output', callback);
})
// --------------------------------------------------------------->


// BUILD / UPDATE www folder -------------------------------------<
gulp.task('build-www', ['data'], function () {})

gulp.task('update-www', function () {
    gulp.watch(files.data, ['data']);
})

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
    run('build-data', 'delete-www', 'build-www', callback);
});

gulp.task('dev', ['default'], function(callback) {
    run('update-data','update-www', callback);
});
// --------------------------------------------------------------->
