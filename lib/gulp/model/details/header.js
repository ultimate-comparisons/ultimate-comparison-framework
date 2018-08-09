import { deleteUndefinedKeys, isNullOrUndefined, resolveDefault } from "../util";

const defaultConfiguration = require("../default");

class Header {
  constructor(nameRef, labelRef, urlRef, useDefaults = true) {
    const ref = {
      nameRef: nameRef,
      labelRef: labelRef,
      urlRef: urlRef
    };

    const defaultConfig = this.constructor.defaultConfig || defaultConfiguration;

    const configuration = defaultConfig.details.header;

    if (ref.urlRef === "inline") {
      ref.urlRef = "id";
    }

    if (useDefaults) {
      if (isNullOrUndefined(nameRef)) {
        ref.nameRef = resolveDefault(configuration.nameRef, ref);
      }

      if (isNullOrUndefined(labelRef)) {
        ref.labelRef = resolveDefault(configuration.labelRef, ref);
      }

      if (isNullOrUndefined(urlRef)) {
        ref.urlRef = resolveDefault(configuration.urlRef, ref);
      }
    }


    this.nameRef = ref.nameRef;
    this.labelRef = ref.labelRef;
    this.urlRef = ref.urlRef;
  }

  static load(json, defaultConfig, useDefaults) {
    Header.defaultConfig = defaultConfig;
    if (isNullOrUndefined(json)) {
      return Header.empty(useDefaults);
    } else {
      return new Header(
        json.nameRef,
        json.labelRef,
        json.urlRef,
        useDefaults
      );
    }
  }

  static empty(useDefaults) {
    return new Header(null, null, null, useDefaults);
  }

  json() {
    return deleteUndefinedKeys({
      nameRef: this.nameRef,
      labelRef: this.labelRef,
      urlRef: this.urlRef
    });
  }
}

export { Header };
