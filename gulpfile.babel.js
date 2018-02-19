'use strict';

import gulp from 'gulp'
import rename from 'gulp-rename';
import _ from 'lodash';
import exec from 'gulp-exec';
import {existsSync, lstatSync, readdirSync, readFile, readFileSync, rmdirSync, unlinkSync, writeFileSync} from 'fs';
import sh from 'sync-exec';
import yaml2json from 'js-yaml';

import * as path from 'path';
import {exec as execSimple} from 'child_process';

const Cite = require('citation-js');
const argv = require('minimist')(process.argv.slice(2));

argv.dir = argv.dir || "";

// convert 'dir' to absolute path assuming that 'dir' was relative to the absolute folder '__dirname'
argv.dir = path.join(__dirname, argv.dir);

const tmp = path.join(argv.dir, 'tmp');

const paths = {
    json: path.join(tmp, 'data'),
    assets: path.join(argv.dir, 'src/assets'),
    lib: path.join(argv.dir, 'lib'),
    data: path.join(__dirname, 'data'),
    config: path.join(__dirname, 'configuration'),
};

const names = {
    data: 'data.json'
};

const files = {
    markdown: [
        path.join(paths.data, '*.md')
    ],
    json: [
        path.join(tmp, 'data', '*.json')
    ],
    config: path.join(paths.config, 'comparison.yml'),
    style: path.join(paths.config, 'style.css'),
    defaultConfig: path.join(paths.config, 'comparison-default.yml'),
    description: path.join(paths.config, 'description.md'),
    mdToJsonGradle: path.join(paths.lib, 'md-to-json/build.gradle'),
    dataJson: path.join(paths.assets, names.data),
    versionInformationExample: path.join(paths.assets, 'VersionInformation.ts.example'),
    versionInformation: path.join(paths.assets, 'VersionInformation.ts')
};

// BUILD / UPDATE data files -------------------------------------<
gulp.task('assets', function () {
    return gulp.src([files.description, files.config, files.style])
        .pipe(gulp.dest(paths.assets));
});

gulp.task('determineColors', function (done) {
    const config = files.config;
    const colorArray = [
        'hsl(15, 100%, 70%)',
        'hsl(30, 100%, 70%)',
        'hsl(45, 100%, 70%)',
        'hsl(60, 100%, 70%)',
        'hsl(75, 100%, 70%)',
        'hsl(90, 100%, 70%)',
        'hsl(105, 100%, 70%)',
        'hsl(120, 100%, 70%)',
        'hsl(135, 100%, 70%)',
        'hsl(150, 100%, 70%)',
        'hsl(165, 100%, 70%)',
        'hsl(180, 100%, 70%)',
        'hsl(195, 100%, 70%)',
        'hsl(210, 100%, 70%)',
        'hsl(225, 100%, 70%)',
        'hsl(240, 100%, 70%)',
        'hsl(255, 100%, 70%)',
        'hsl(270, 100%, 70%)',
        'hsl(285, 100%, 70%)',
        'hsl(300, 100%, 70%)',
        'hsl(315, 100%, 70%)',
        'hsl(330, 100%, 70%)'
    ];
    const foregroundArray = [
        "#0d0d0d",
        "#0d0d0d",
        "#0d0d0d",
        "#0d0d0d",
        "#0d0d0d",
        "#0d0d0d",
        "#0d0d0d",
        "#0d0d0d",
        "#0d0d0d",
        "#0d0d0d",
        "#0d0d0d",
        "#0d0d0d",
        "#0d0d0d",
        "#0d0d0d",
        "#ffff00",
        "#ffff00",
        "#ffff00",
        "#ffff00",
        "#ffff00",
        "#0d0d0d",
        "#0d0d0d",
        "#0d0d0d"
    ];
    let color;
    let input = yaml2json.safeLoad(readFileSync(config, "utf8"));

    const data = _.cloneDeep(input).criteria || [];
    const autoCriteria = _.cloneDeep(input.autoCriteria) || {};
    let changed = false;
    let criteriaSet = new Set();
    let criteriaValueCount = 0;
    let criteriaCount = 0;

    data.forEach((map) => {
        const criteriaMap = map || new Map;
        Object.keys(criteriaMap).forEach((criteriaKey) => {
            const criteria = criteriaMap[criteriaKey] || {};
            if (criteria.type === "label" || criteria.type === undefined) {
                const values = criteria.values || [];
                let num = 0;
                Object.keys(values).forEach(valueKey => {
                    const value = values[valueKey] || {};
                    if (value.class === undefined && value.color === undefined && value.backgroundColor === undefined) {
                        criteriaValueCount++;
                        num++;
                    }
                });
                if (num > 0) {
                    criteriaSet.add(criteriaKey);
                    criteriaCount++;
                }
            }
        })
    });

    Object.keys(autoCriteria).forEach(criteriaKey => {
        const criteria = autoCriteria[criteriaKey] || {};
        if (criteria.type === "label" || criteria.type === undefined) {
            const values = criteria.values || [];
            let num = 0;
            Object.keys(values).forEach(valueKey => {
                const value = values[valueKey] || {};
                if (value.class === undefined && value.color === undefined && value.backgroundColor === undefined) {
                    criteriaValueCount++;
                    num++;
                }
            });
            if (num > 0 && !criteriaSet.has(criteriaKey)) {
                criteriaCount++;
            }
        }
    });

    let delta = Math.floor(colorArray.length / criteriaValueCount);
    let columnDelta;
    if (delta < 1) {
        columnDelta = Math.floor(colorArray.length / criteriaCount);
    } else {
        columnDelta = 0;
    }

    color = Math.floor(Math.random() * colorArray.length);

    input.autoColor = input.autoColor || {};
    let autoColor = input.autoColor;

    data.forEach((map) => {
        const criteriaMap = map || new Map;
        completeAutoColor(criteriaMap);
    });

    completeAutoColor(autoCriteria);

    function completeAutoColor(cmap) {
        Object.keys(cmap).forEach((criteriaKey) => {
            const criteria = cmap[criteriaKey] || {};
            if (criteria.type === "label" || criteria.type === undefined) {
                const values = criteria.values || [];
                let tmpValues = [];
                Object.keys(values).forEach((key) => {
                    const value = values[key] || {};
                    if (value.class === undefined && value.color === undefined && value.backgroundColor === undefined) {
                        let obj = value;
                        obj.name = key;
                        tmpValues.push(obj);
                    }
                });

                if (tmpValues[0] && tmpValues[0].weight === undefined) {
                    tmpValues.sort((val1, val2) => {
                        const name1 = val1.name || "";
                        const name2 = val2.name || "";
                        return name1.toString().localeCompare(name2.toString());
                    })
                } else {
                    // TODO support order in config (ASC|DESC)
                    let weight = 1;
                    tmpValues.sort((val1, val2) => {
                        const weight1 = val1.weight || 0;
                        const weight2 = val2.weight || 0;
                        return weight * (weight1 - weight2);
                    });
                }
                if (tmpValues.length > 0) {
                    autoColor[criteriaKey] = autoColor[criteriaKey] || {};
                }

                tmpValues.forEach(value => {
                    if (!autoColor[criteriaKey][value.name]) {
                        changed = true;
                        autoColor[criteriaKey][value.name] = {
                            color: foregroundArray[color],
                            backgroundColor: colorArray[color]
                        };
                        color = (color + delta) % colorArray.length;
                    }
                });
                color = (color + columnDelta) % colorArray.length;
            }
        });
    }


    if (changed) {
        writeFileSync(config, yaml2json.safeDump(input), "utf8");
    }
    done();
});

gulp.task('versionInfo', function () {
    let versionFile = files.versionInformationExample;
    let output = files.versionInformation;
    let revision = sh('git rev-parse HEAD');
    let date = sh('git log -1 --format=%cd --date=short');
    return gulp.src(versionFile)
        .pipe(rename(output))
        .pipe(gulp.dest('.'))
        .pipe(exec('sed -i\'.bak\' "s/§§date§§/' + date.stdout.trim() + '/" ' + output))
        .pipe(exec('sed -i\'.bak\' "s/§§commit§§/' + revision.stdout.trim() + '/g" ' + output));
});

gulp.task('update-data', function () {
    gulp.watch(files.markdown, ['build-data']);
});

gulp.task('markdown', function (callback) {
    deleteFolderRecursive(paths.json);
    const gradlew = path.join(argv.dir, 'gradlew');
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
            console.log(stdout);
            console.log(stderr);
            callback(err);
        });

    function deleteFolderRecursive(folder) {
        if (existsSync(folder)) {
            readdirSync(folder).forEach(function (file) {
                const curPath = path.join(folder, file);
                if (lstatSync(curPath).isDirectory()) { // recurse
                    deleteFolderRecursive(curPath);
                } else { // delete file
                    unlinkSync(curPath);
                }
            });
            rmdirSync(folder);
        }
    }
});

gulp.task('citation', function (done) {
    let input = yaml2json.safeLoad(readFileSync(files.config, "utf8"));
    let defaults = yaml2json.safeLoad(readFileSync(files.defaultConfig, "utf8"));
    const citation = input.citation || {};
    const citationDefault = defaults.citation;
    const csl = path.join(paths.data, (citation.csl || citationDefault.csl));
    const bib = path.join(paths.data, (citation.bib || citationDefault.bib));

    if (csl) {
        readFile(csl, "utf8", function (err, cslString) {
            if (err) {
                return console.error("Could not read File: ".concat(err.toString()));
            }
            Cite.CSL.register.addTemplate("defaultParameter", cslString.toString());
            readBib(done)
        });
    } else {
        console.info("Undefined 'csl' file using default!");
        readBib(done)
    }

    function readBib(done) {
        if (bib) {
            readFile(bib, "utf8", function (err, data) {
                let changed;
                if (err) {
                    return console.error("Could not read File: ".concat(err.toString()));
                }
                const cite = new Cite(data.toString().replace(/^%.*\n?/gm, ''), {forceType: 'string/bibtex'});
                let map = new Map();
                for (let item of cite.data) {
                    let itemData = new Cite(item);
                    map.set(item.id, (csl ?
                            itemData.get({
                                type: 'string',
                                style: 'citation-defaultParameter'
                            }) :
                            item.get({type: 'string'})
                        ).trim().replace(/\. \./gm, ".")
                    );
                    changed = true;
                }

                if (changed) {
                    let data = readFileSync(files.dataJson, "utf8");
                    data = data.concat(readFileSync(files.description, "utf8"));
                    let keys = new Set();
                    let keyReg = /\[@(.*?)]/g;
                    let match;
                    do {
                        match = keyReg.exec(data);
                        if (match) keys.add(match[1]);
                    } while (match);

                    keys.forEach(key => {
                        if (!map.has(key)) {
                            throw new Error("Bibtex entry for key '".concat(key, "' is missing!"));
                        }
                    });

                    let obj = Object.create(null);
                    let i = 0;
                    for (let [k, v] of map) {
                        if (data.match('@'.concat(k))) {
                            obj[k] = {index: i, value: v};
                            i++;
                        }
                    }
                    input.autoCitation = obj;
                    writeFileSync(files.config, yaml2json.safeDump(input), "utf8");
                }
                done();
            });
        } else {
            done();
        }
    }
});

gulp.task('criteria', function (done) {
    let config = yaml2json.safeLoad(readFileSync(files.config, "utf8")) || {};
    const defaultConfig = yaml2json.safeLoad(readFileSync(files.defaultConfig, "utf8"));
    const defaultCriteria = defaultConfig.autoCriteria || {};
    let criteriaObject = config.criteria || [];
    let criteria = new Map();
    criteriaObject.forEach(criteriaMap => Object.keys(criteriaMap).forEach(key => {
        const valueObject = criteriaMap[key] || {};
        const valuesObject = valueObject.values || {};
        let values = new Set();
        Object.keys(valuesObject).forEach(valueKey => values.add(valueKey));
        criteria.set(key, {type: valueObject.type || defaultConfig.criteria[0].Example.type, values: values});
    }));

    const data = JSON.parse(readFileSync(files.dataJson, "utf8")) || [];

    let autoCriteria = Object.create(null);
    data.forEach(entry => Object.keys(entry).forEach(entryKey => {
        if ("tag" === entryKey.toString() || "descr" === entryKey.toString()) {
            if (!criteria.has("id")) {
                autoCriteria["id"] = defaultCriteria.id;
            }

            if (!criteria.has("description")) {
                autoCriteria["description"] = defaultCriteria.description;
            }
            return;
        }

        const entryValue = entry[entryKey];
        if (criteria.has(entryKey) && "label" !== criteria.get(entryKey).type) {
            return;
        } else if (criteria.has(entryKey)) {
            const childs = entryValue.childs || {};
            const firstChild = childs["0"] || [];
            firstChild.forEach(array => {
                const vals = array || [];
                vals.forEach(value => {
                    const name = value.content;
                    if (!name) return;
                    if (!criteria.get(entryKey).values.has(name)) {
                        if (!autoCriteria[entryKey]) {
                            autoCriteria[entryKey] = {};
                            autoCriteria[entryKey].values = {};
                        }
                        autoCriteria[entryKey].values[name] = {};
                    }
                });

            });
        } else {
            const childs = entryValue.childs || {};
            const firstChild = childs["0"] || [];
            if (firstChild.length > 0) {
                if (firstChild[0] === "") {
                    return;
                }
                if (typeof firstChild[0] === "string") {
                    autoCriteria[entryKey] = _.cloneDeep(defaultCriteria.defaultMarkdown);
                } else {
                    if (autoCriteria[entryKey] === undefined) {
                        autoCriteria[entryKey] = _.cloneDeep(defaultCriteria.defaultLabel);
                        autoCriteria[entryKey].values = {};
                    }
                    firstChild.forEach(array => {
                        const vals = array || [];
                        vals.forEach(value => {
                            const name = value.content;
                            if (!name) return;
                            autoCriteria[entryKey].values[name] = {};
                        });
                    })
                }
            }

        }
    }));

    config.autoCriteria = autoCriteria;
    writeFileSync(files.config, yaml2json.safeDump(config), "utf8");

    done();
});

gulp.task('build-data', gulp.series('markdown', 'criteria', 'determineColors', 'citation', 'assets'));
// --------------------------------------------------------------->

// DEFAULT and DEV tasks -----------------------------------------<
gulp.task('default', gulp.series('build-data'));

gulp.task('dev', gulp.series('default', 'update-data'));
// --------------------------------------------------------------->
