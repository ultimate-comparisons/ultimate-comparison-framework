import { isNullOrUndefined, resolveDefault } from "../util";

const defaultConfiguration = require("../default");

class CitationFiles {
  constructor(csl, bib, useDefaults = true) {
    const ref = {
      csl: csl,
      bib: bib
    };

    const defaultConfig = this.constructor.defaultConfig || defaultConfiguration;
    const configuration = defaultConfig.citation;

    if (useDefaults) {
      if (isNullOrUndefined(csl)) {
        ref.csl = resolveDefault(configuration.csl, ref);
      }

      if (isNullOrUndefined(bib)) {
        ref.bib = resolveDefault(configuration.bib, ref);
      }
    }

    this.csl = ref.csl;
    this.bib = ref.bib;
  }

  static load(json, defaultConfig, useDefaults) {
    CitationFiles.defaultConfig = defaultConfig;
    if (isNullOrUndefined(json)) {
      return CitationFiles.empty(useDefaults);
    } else {
      return new CitationFiles(
        json.csl,
        json.bib,
        useDefaults
      );
    }
  }

  static empty(useDefaults) {
    return new CitationFiles(null, null, useDefaults);
  }

  json() {
    return {csl: this.csl, bib: this.bib};
  }
}

export { CitationFiles };
