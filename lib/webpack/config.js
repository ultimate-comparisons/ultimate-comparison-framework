const path = require('path');

const projectRoot = path.resolve(__dirname, '../..');
const processRoot = process.cwd();

const folders = {
    dist: path.join(processRoot, 'dist'),
    nodeModules: path.join(projectRoot, 'node_modules')
};

const files = {
    main: path.join(projectRoot, 'src/main.ts'),
    polyfills: path.join(projectRoot, "src/polyfills.ts"),
    index: path.join(projectRoot, 'src/index.html'),
    favicon: path.join(projectRoot, "src/favicon.ico"),
    tsConfigAppJson: path.join(projectRoot, "src/tsconfig.app.json")
};

const styles = [
    path.join(projectRoot, "src/styles.css"),
    path.join(projectRoot, "src/assets/bootstrap.css")
];

const clean = {
    root: projectRoot,
    path: path.join(folders.dist),
    exclude: [
        'data.json',
        'comparison.json',
        'description.md',
        'style.css'

    ]
};

module.exports = {
    folders: folders,
    files: files,
    styles: styles,
    clean: clean
};
