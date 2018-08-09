import { deleteUndefinedKeys, getDefaultCriteria, isNullOrUndefined, resolveDefault } from "../util";
import { CriteriaValue } from "./criteriaValue";

const defaultConfiguration = require("../default");

class Criteria {
  constructor(id, type, name, search, table, detail, description, placeholder, order, andSearch, rangeSearch, values, lock, useDefaults = true) {
    const ref = {
      id: id,
      type: type,
      name: name,
      search: search,
      table: table,
      detail: detail,
      description: description,
      placeholder: placeholder,
      order: order,
      andSearch: andSearch,
      rangeSearch: rangeSearch,
      lock: lock,
      values: values
    };

    const defaultConfig = this.constructor.defaultConfig || defaultConfiguration;

    if ((isNullOrUndefined(type) && id === "id") ||
      (!isNullOrUndefined(type) &&
        String(type).toUpperCase() === "NAME-URL" ||
        String(type).toUpperCase() === "NAME_URL" ||
        String(type).toUpperCase() === "URL")
    ) {
      ref.type = CriteriaTypes.NAME_URL;
    }

    if (!isNullOrUndefined(ref.type)) {
      ref.type = ref.type.toUpperCase();
    }

    if (useDefaults && !isNullOrUndefined(ref.type)) {
      const criteria = defaultConfig.criteria;
      const defType = id === "id" ? "id" : id === "description" ? "description" : ref.type;
      const def = getDefaultCriteria(criteria, defType);

      if (isNullOrUndefined(name)) {
        ref.name = resolveDefault(def.name, ref);
      }

      if (isNullOrUndefined(search)) {
        ref.search = def.search;
      }

      if (isNullOrUndefined(table)) {
        ref.table = def.table;
      }

      if (isNullOrUndefined(detail)) {
        ref.detail = def.detail;
      }

      if (isNullOrUndefined(description)) {
        ref.description = resolveDefault(def.description, ref);
      }

      if (isNullOrUndefined(placeholder)) {
        ref.placeholder = resolveDefault(def.placeholder, ref);
      }

      if (isNullOrUndefined(order)) {
        ref.order = def.order;
      }

      if (isNullOrUndefined(andSearch)) {
        ref.andSearch = def.andSearch;
      }

      if (isNullOrUndefined(rangeSearch)) {
        ref.rangeSearch = def.rangeSearch;
      }

      if (isNullOrUndefined(lock)) {
        ref.lock = new Map();
        if (!isNullOrUndefined(def.lock)) {
          Object.keys(def.lock).forEach(key => ref.lock.set(key, def.lock[key]));
        }
      }
    }

    if (isNullOrUndefined(values)) {
      ref.values = new Map();
    }

    if (isNullOrUndefined(ref.lock)) {
      ref.lock = new Map();
    }

    this.id = id;
    this.type = ref.type;

    this.name = ref.name;
    this.search = ref.search;
    this.table = ref.table;
    this.detail = ref.detail;
    this.description = ref.description;
    this.placeholder = ref.placeholder;
    this.order = ref.order;
    this.andSearch = ref.andSearch;
    this.rangeSearch = ref.rangeSearch;

    this.values = ref.values;

    this.lock = ref.lock;
  }

  static copy(id, name, criteria) {
    return new Criteria(
      id,
      criteria.type,
      name,
      criteria.search,
      criteria.table,
      criteria.detail,
      criteria.description,
      criteria.placeholder,
      criteria.order,
      criteria.andSearch,
      criteria.rangeSearch,
      criteria.values,
      criteria.lock);
  }

  static load(key, type, json, defaultConfig, useDefaults = true) {
    Criteria.defaultConfig = defaultConfig;
    if (isNullOrUndefined(json)) {
      return Criteria.empty(key, type, useDefaults);
    } else {
      const criteriaKey = isNullOrUndefined(json.id) ? key : json.id;
      const values = new Map();
      Object.keys(json.values || {}).map(value => CriteriaValue.loadJson(key, value, (json.values || {})[value]))
        .filter(value => !isNullOrUndefined(value))
        .forEach(value => values.set(value.name, value));
      let lock;
      if (!isNullOrUndefined(json.lock)) {
        lock = new Map();
        Object.keys(json.lock).forEach(key => {
          lock.set(key, json.lock[key]);
        })
      }

      return new Criteria(
        criteriaKey,
        type,
        json.name,
        json.search,
        json.table,
        json.detail,
        json.description,
        json.placeholder,
        json.order,
        json.andSearch,
        json.rangeSearch,
        values,
        lock,
        useDefaults
      );
    }
  }

  static loadArray(json, defaultConfig, useDefaults = true) {
    const result = [];
    if (useDefaults) {
      const criteriaNames = new Set((json || []).reduce((r, e) => [...r, ...Object.keys(e)], []));
      if (!criteriaNames.has("id")) {
        result.push(Criteria.load("id", null, null, defaultConfig, useDefaults));
      }
      if (!criteriaNames.has("description")) {
        result.push(Criteria.load("description", CriteriaTypes.MARKDOWN, null, defaultConfig, useDefaults));

      }
    }

    if (isNullOrUndefined(json) || !Array.isArray(json)) {
      return result;
    } else {
      json.forEach(criteriaSingleMap => {
        Object.keys(criteriaSingleMap).forEach(criteriaKey => {
            const json = criteriaSingleMap[criteriaKey];
            result.push(Criteria.load(criteriaKey, json.type, json, defaultConfig, useDefaults));
          }
        );
      });

      return result;
    }
  }

  static empty(key, type, useDefaults, defaultConfiguration) {
    if (!isNullOrUndefined(defaultConfiguration)) {
      Criteria.defaultConfig = defaultConfiguration;
    }
    return new Criteria(key, type, null, null, null, null, null, null, null, null, null, null, null, useDefaults);
  }

  getValue(name) {
    if (this.values.has(name)) {
      return this.values.get(name);
    } else {
      return null;
    }
  }

  combine(other) {
    this.type = isNullOrUndefined(this.type) ? other.type : this.type;
    this.name = isNullOrUndefined(this.name) ? other.name : this.name;
    this.search = isNullOrUndefined(this.search) ? other.search : this.search;
    this.table = isNullOrUndefined(this.table) ? other.table : this.table;
    this.detail = isNullOrUndefined(this.detail) ? other.details : this.detail;
    this.description = isNullOrUndefined(this.description) ? other.description : this.description;
    this.placeholder = isNullOrUndefined(this.placeholder) ? other.placeholder : this.placeholder;
    this.order = isNullOrUndefined(this.order) ? other.order : this.order;
    this.andSearch = isNullOrUndefined(this.andSearch) ? other.andSearch : this.andSearch;
    this.rangeSearch = isNullOrUndefined(this.rangeSearch) ? other.rangeSearch : this.rangeSearch;
    this.lock = isNullOrUndefined(this.lock) ? other.lock : this.lock;

    const values = new Map();
    this.values.forEach((value, key) => {
      if (other.values.has(key)) {
        values.set(key, value.combine(other.values.get(key)));
      } else {
        values.set(key, value);
      }
    });
    this.values = values;

    return this;
  }

  json() {
    let criteria = {};
    let values;
    if (this.values.size > 0) {
      values = {};
      this.values.forEach((value, key) =>
        values[key] = !isNullOrUndefined(value) ? value.json() : null);
    }
    let lock;
    if (!isNullOrUndefined(this.lock) && this.lock.size > 0) {
      lock = {};
      this.lock.forEach((value, key) => lock[key] = value);
    }

    let type = this.type;
    if (!isNullOrUndefined(type) && type === CriteriaTypes.NAME_URL) {
      type = "NAME-URL";
    }

    criteria[this.id] = deleteUndefinedKeys({
      name: this.name,
      type: type,
      search: this.search,
      table: this.table,
      detail: this.detail,
      description: this.description,
      placeholder: this.placeholder,
      order: this.order,
      andSearch: this.andSearch,
      rangeSearch: this.rangeSearch,
      values: values,
      lock: lock
    });
    return criteria;
  }
}

const CriteriaTypes = Object.freeze({
  NAME_URL: 'NAME_URL',
  LABEL: 'LABEL',
  TEXT: 'TEXT',
  MARKDOWN: 'MARKDOWN',
  RATING: 'RATING',
  REPOSITORY: 'REPOSITORY'
});

// filter private types
const CriteriaTypeKeys = Object.keys(CriteriaTypes).filter((key) => !['NAME_URL'].includes(key));

export { Criteria, CriteriaTypes, CriteriaTypeKeys };
