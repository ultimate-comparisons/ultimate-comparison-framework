import { existsSync, readFileSync, writeFileSync } from "fs";
import yaml2json from "js-yaml";
import { Configuration, Criteria, CriteriaTypes, CriteriaValue, Data } from "../model/model.module";
import { determineColors } from "./determineColors.babel";
import { citation } from "./citation.babel";
import { isNullOrUndefined } from "../model/util";

export function criteria(paths, files, done) {
    const configuration = Configuration.load(
        existsSync(files.config) ? yaml2json.safeLoad(readFileSync(files.config, "utf8")) : {}
    );
    const oldAutoConfiguration = Configuration.load(
        existsSync(files.autoConfig) ? yaml2json.safeLoad(readFileSync(files.autoConfig, "utf8")) : {}
    );
    const defaultConfiguration = Configuration.load(
        yaml2json.safeLoad(readFileSync(files.defaultConfig, "utf8"))
    );
    const data = Data.loadJson(JSON.parse(readFileSync(files.dataJson, "utf8")) || [], configuration);
    const autoConfiguration = new Configuration.empty(false);

    if (!configuration.containsCriteria("id")) {
        autoConfiguration.setCriteria(0, defaultConfiguration.getCriteria("id"));
    }

    if (!configuration.containsCriteria("description")) {
        autoConfiguration.setCriteria(1, defaultConfiguration.getCriteria("description"));
    }

    const types = new Map();
    configuration.criteria.forEach(criteria => {
        if (!isNullOrUndefined(criteria.type)) {
            types.set(criteria.id, criteria.type);
        } else {
            let textCount = 0;
            let labelCount = 0;
            data.dataElements.map(dataElement => dataElement.criteriaData.get(criteria.id))
                .filter(value => !isNullOrUndefined(value))
                .forEach(criteriaData => {
                    if (!isNullOrUndefined(criteriaData.text) && criteriaData.text.length > 0) {
                        textCount++;
                    }
                    if (!isNullOrUndefined(criteriaData.labels) && criteriaData.labels.size > 0) {
                        labelCount++;
                    }
                });
            types.set(criteria.id, textCount < labelCount ? CriteriaTypes.LABEL : CriteriaTypes.MARKDOWN);
            autoConfiguration.setCriteria(-1, Criteria.empty(criteria.id, types.get(criteria.id), false));
        }
    });

    data.dataElements.forEach(dataElement => {
        (dataElement.criteriaData || new Map()).forEach(criteriaData => {
            // Criteria is defined and not a Label
            if (configuration.containsCriteria(criteriaData.name) &&
                types.get(criteriaData.name) !== CriteriaTypes.LABEL) {
                return;

            } else
            // Criteria is defined and a Label
            if (configuration.containsCriteria(criteriaData.name)) {
                const criteria = configuration.getCriteria(criteriaData.name);
                const labels = criteriaData.labels;
                labels.forEach((value, key) => {
                    if (!criteria.values.has(key)) {
                        if (!autoConfiguration.containsCriteria(criteriaData.name)) {
                            autoConfiguration.setCriteria(-1, Criteria.empty(criteria.id, criteria.type, false));
                        }
                        autoConfiguration.getCriteria(criteriaData.name)
                            .values.set(key, new CriteriaValue(criteria.id, key));
                    }
                })
            }
            // Criteria is not defined
            else {
                const criteria = Criteria.copy(
                    criteriaData.name,
                    criteriaData.name,
                    criteriaData.labels.size > 0 ?
                        defaultConfiguration.getCriteria("default-label") :
                        defaultConfiguration.getCriteria("default-markdown")
                );
                // Criteria is a Label
                if (criteria.type === CriteriaTypes.LABEL) {
                    criteriaData.labels.forEach((label, key) => criteria.values.set(key, new CriteriaValue(criteria.id, key)))
                }
                autoConfiguration.setCriteria(-1, criteria);

            }
        });
    });

    // Renew 'comparison-auto-config.yml' with autoCitation and auto colors
    determineColors(defaultConfiguration, configuration, oldAutoConfiguration, autoConfiguration, function () {
    });

    citation(paths, files, configuration, autoConfiguration, defaultConfiguration, function () {
        writeFileSync(files.autoConfig, yaml2json.safeDump(autoConfiguration.json()), "utf8");

        done();
    });


}
