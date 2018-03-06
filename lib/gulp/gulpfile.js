require("@babel/register")({
    only: [
        /node_modules\/ultimate-comparison\/lib\/gulp\/gulpfile.babel.js/,
        /lib\/gulp\/gulpfile.babel.js/,
        /lib\\gulp\\gulpfile.babel.js/,
        /node_modules\\ultimate-comparison\\lib\\gulp\\gulpfile.babel.js/
    ]
});

module.export = require("./gulpfile.babel.js");
