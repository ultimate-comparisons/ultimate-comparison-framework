import { deleteUndefinedKeys, isNullOrUndefined, resolveDefault } from "../util";

const defaultConfiguration = require("../default");

class Body {
  constructor(title, bodyRef, useDefaults = true) {
    const ref = {
      title: title,
      bodyRef: bodyRef
    };

    const defaultConfig = this.constructor.defaultConfig || defaultConfiguration;
    const configuration = defaultConfig.details.body;

    if (useDefaults) {
      if (isNullOrUndefined(title)) {
        ref.title = resolveDefault(configuration.title, ref);
      }

      if (isNullOrUndefined(bodyRef)) {
        ref.bodyRef = resolveDefault(configuration.bodyRef, ref);
      }
    }

    this.title = ref.title;
    this.bodyRef = ref.bodyRef;
  }

  static load(json, defaultConfig, useDefaults) {
    Body.defaultConfig = defaultConfig;
    if (isNullOrUndefined(json)) {
      return Body.empty(useDefaults);
    } else {
      return new Body(
        json.title,
        json.bodyRef,
        useDefaults
      );
    }
  }

  static empty(useDefaults) {
    return new Body(null, null, useDefaults);
  }

  json() {
    return deleteUndefinedKeys({
      title: this.title,
      bodyRef: this.bodyRef
    });
  }
}

export { Body };
