import { readFile, readFileSync } from "fs";
import * as path from "path";

export function citation(paths, files, configuration, autoConfiguration, defaultConfiguration, done) {
    const citationFiles = configuration.citationFiles || {};
    const citationDefaultFiles = defaultConfiguration.citationFiles;
    const csl = path.join(paths.data, (citationFiles.csl || citationDefaultFiles.csl));
    const bib = path.join(paths.data, (citationFiles.bib || citationDefaultFiles.bib));

    if (csl) {
        readFile(csl, "utf8", function (err, cslString) {
            if (err) {
                return console.error("Could not read File: ".concat(err.toString()));
            }
            readBib(cslString, done)
        });
    } else {
        console.info("Undefined 'csl' file using default!");
        readBib(done)
    }

    function readBib(cslString, done) {
        if (bib) {
            readFile(bib, "utf8", function (err, bibString) {
                if (err) {
                    return console.error("Could not read File: ".concat(err.toString()));
                }
                autoConfiguration.setCitation(cslString, bibString);

                // Filter unused keys
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
                    if (!autoConfiguration.hasCitation(key)) {
                        throw new Error("Bibtex entry for key '".concat(key, "' is missing!"));
                    }
                });

                autoConfiguration.citation = autoConfiguration.citation.filter((citation) =>
                    keys.has(citation.key));
                done();
            });
        } else {
            done();
        }
    }
}
