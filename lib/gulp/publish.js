const spawn = require('child_process').spawn;
const argv = require('minimist')(process.argv.slice(2));

spawn(
    'node',
    [
        './node_modules/gulp/bin/gulp.js',
        'release',
        '--gulpfile=./lib/gulp/gulpfile.js',
        '--tag=' + argv.tag
    ],
    {
        stdio: 'inherit'
    }
).on('close', (code) => {
    if (code === 0) {
        spawn('np', ['publish', argv.tag, '--tag=next'], {stdio: 'inherit'});
    }
});

