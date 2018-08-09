import { Criteria, CriteriaValue, isNullOrUndefined } from "../model/model.module";

export function determineColors(defaultConfiguration, configuration, oldAutoConfiguration, autoConfiguration, done) {
    let criteriaCount = 0;
    let criteriaValueCount = 0;

    // Test configuration criteria values for missing color and add to autoConfiguration
    configuration.criteria.forEach(criteria => {
        criteria.values.forEach(criteriaValue => {
            if (!criteriaValue.hasColor()) {
                if (!autoConfiguration.containsCriteria(criteria.id)) {
                    autoConfiguration.setCriteria(-1, Criteria.empty(criteria.id, criteria.type));
                }
                const autoCriteria = autoConfiguration.getCriteria(criteria.id);
                autoCriteria.values.set(criteriaValue.name, new CriteriaValue(criteria.id, criteriaValue.name));
            }
        });
    });

    // Test autoConfiguration criteria values for missing color
    autoConfiguration.criteria.forEach(criteria => {
        let num = 0;
        const oldCriteria = oldAutoConfiguration.getCriteria(criteria.id);
        criteria.values.forEach(criteriaValue => {
            if (!isNullOrUndefined(oldCriteria) &&
                oldCriteria.values.has(criteriaValue.name) &&
                oldCriteria.values.get(criteriaValue.name).hasColor()
            ) {
                const oldCriteriaValue = oldCriteria.values.get(criteriaValue.name);
                criteriaValue.clazz = oldCriteriaValue.clazz;
                criteriaValue.color = oldCriteriaValue.color;
                criteriaValue.backgroundColor = oldCriteriaValue.backgroundColor;
            } else {
                criteriaValueCount++;
                num++;
            }
        });
        if (num > 0) {
            criteriaCount++;
        }
    });


    const colorCriteria = defaultConfiguration.getCriteria("default-color");
    if (!isNullOrUndefined(colorCriteria) && colorCriteria.values.size > 0) {
        const length = colorCriteria.values.size;
        const delta = Math.floor(length / criteriaValueCount);
        const columnDelta = delta < 1 ? Math.floor(length / criteriaCount) : 0;

        let colorNumber = Math.floor(Math.random() * length);

        const colorValues = Array.from(colorCriteria.values).map(([key, value]) => value);

        autoConfiguration.criteria.forEach(criteria => {
            criteria.values.forEach(criteriaValue => {
                if (!criteriaValue.hasColor()) {
                    const defaultValue = colorValues[colorNumber];
                    criteriaValue.color = defaultValue.color;
                    criteriaValue.backgroundColor = defaultValue.backgroundColor;
                    criteriaValue.clazz = defaultValue.clazz;

                    colorNumber = (colorNumber + delta) % length;
                }
            });
            colorNumber = (colorNumber + columnDelta) % length;
        });
    }
    done();
}
