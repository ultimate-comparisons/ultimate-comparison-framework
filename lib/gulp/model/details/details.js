import { Header } from "./header";
import { Body } from "./body";
import { deleteUndefinedKeys, isNullOrUndefined } from "../util";

const defaultConfiguration = require("../default");

class Details {
  constructor(header, body, tooltipAsText, useDefaults = true) {
    const ref = {
      header: header,
      body: body,
      tooltipAsText: tooltipAsText
    };

    if (isNullOrUndefined(header)) {
      ref.header = Header.empty(useDefaults);
    }

    if (isNullOrUndefined(body)) {
      ref.body = Body.empty(useDefaults);
    }

    if (useDefaults) {
      const defaultConfig = this.constructor.defaultConfig || defaultConfiguration;
      const def = defaultConfig.details;

      if (isNullOrUndefined(tooltipAsText)) {
        ref.tooltipAsText = def.tooltipAsText;
      }
    }

    this.header = ref.header;
    this.body = ref.body;
    this.tooltipAsText = ref.tooltipAsText;
  }

  static load(json, defaultConfig, useDefaults) {
    if (isNullOrUndefined(json)) {
      return Details.empty(useDefaults);
    } else {
      return new Details(
        Header.load(json.header, defaultConfig, useDefaults),
        Body.load(json.body, defaultConfig, useDefaults),
        json.tooltipAsText,
        useDefaults
      );
    }
  }

  static empty(useDefaults) {
    return new Details(null, null, null, useDefaults);
  }

  json() {
    return deleteUndefinedKeys({
      header: this.header.json(),
      body: this.body.json(),
      tooltipAsText: this.tooltipAsText
    });
  }
}

export { Details };
