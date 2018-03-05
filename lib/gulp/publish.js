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
        spawn('git', ['add', 'src/assets/VersionInformation.ts'], {stdio: 'inherit'});
        spawn('git', ['commit', '-m "Update VersionInformation.ts"'], {stdio: 'inherit'});
        spawn('np', [argv.tag, '--tag=next'], {stdio: 'inherit'});
    }
});

