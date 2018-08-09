import { deleteUndefinedKeys, isNullOrUndefined } from "../util";

class CriteriaValue {
  constructor(criteriaName, name, description, clazz, color, backgroundColor, weight, minAge, maxAge, minAgeUnit, maxAgeUnit) {
    this.criteriaName = criteriaName;
    this.name = name;
    this.description = description;
    this.clazz = clazz;
    this.color = color;
    this.backgroundColor = backgroundColor;
    this.weight = weight;
    this.minAge = minAge;
    this.maxAge = maxAge;
    this.minAgeUnit = minAgeUnit;
    this.maxAgeUnit = maxAgeUnit;
  }

  static loadJson(criteriaName, name, json) {
    if (isNullOrUndefined(json)) {
      return new CriteriaValue(criteriaName, name);
    }
    return new CriteriaValue(
      criteriaName,
      name,
      json.description,
      json.class,
      json.color,
      json.backgroundColor,
      json.weight,
      json.minAge,
      json.maxAge,
      json.minAgeUnit,
      json.maxAgeUnit
    );
  }

  json() {
    return deleteUndefinedKeys({
      description: this.description,
      class: this.clazz,
      color: this.color,
      backgroundColor: this.backgroundColor,
      weight: this.weight,
      minAge: this.minAge,
      maxAge: this.maxAge,
      minAgeUnit: this.minAgeUnit,
      maxAgeUnit: this.maxAgeUnit
    });
  }

  hasColor() {
    return !(isNullOrUndefined(this.color) && isNullOrUndefined(this.backgroundColor) && isNullOrUndefined(this.clazz));
  }

  combine(other) {
    this.description = isNullOrUndefined(this.description) ? other.description : this.description;
    this.clazz = isNullOrUndefined(this.clazz) ? other.clazz : this.clazz;
    this.color = isNullOrUndefined(this.color) ? other.color : this.color;
    this.backgroundColor = isNullOrUndefined(this.backgroundColor) ? other.backgroundColor : this.backgroundColor;
    this.weight = isNullOrUndefined(this.weight) ? other.weight : this.weight;
    this.minAge = isNullOrUndefined(this.minAge) ? other.minAge : this.minAge;
    this.maxAge = isNullOrUndefined(this.maxAge) ? other.maxAge : this.maxAge;
    this.minAgeUnit = isNullOrUndefined(this.minAgeUnit) ? other.minAgeUnit : this.minAgeUnit;
    this.maxAgeUnit = isNullOrUndefined(this.maxAgeUnit) ? other.maxAgeUnit : this.maxAgeUnit;

    return this;
  }

}

export { CriteriaValue };
