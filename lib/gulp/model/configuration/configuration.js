import { deleteUndefinedKeys, isNullOrUndefined, resolveDefault } from "../util";
import { Details } from "../details/details";
import { Citation } from "../citation/citation";
import { Criteria } from "../criteria/criteria";
import { CitationFiles } from "../citation/citationFiles";

const defaultConfiguration = require("../default");

class Configuration {
  constructor(title, subtitle, selectTitle, tableTitle, repository, details, criteria, citationFiles, citation, useDefaults = true) {
    const ref = {
      title: title,
      subtitle: subtitle,
      selectTitle: selectTitle,
      tableTitle: tableTitle,
      repository: repository,
      details: details,
      criteria: criteria,
      citation: citation,
      citationFiles: citationFiles
    };

    const defaultConfig = this.constructor.defaultConfig || defaultConfiguration;

    if (useDefaults) {
      if (isNullOrUndefined(title)) {
        ref.title = resolveDefault(defaultConfig.title, ref);
      }

      if (isNullOrUndefined(subtitle)) {
        ref.subtitle = resolveDefault(defaultConfig.subtitle, ref);
      }

      if (isNullOrUndefined(selectTitle)) {
        ref.selectTitle = resolveDefault(defaultConfig.selectTitle, ref);
      }

      if (isNullOrUndefined(tableTitle)) {
        ref.tableTitle = resolveDefault(defaultConfig.tableTitle, ref);
      }

      if (isNullOrUndefined(repository)) {
        ref.repository = resolveDefault(defaultConfig.repository, ref);
      }

      if (isNullOrUndefined(details)) {
        ref.details = new Details();
      }

      if (isNullOrUndefined(citationFiles)) {
        ref.citationFiles = new CitationFiles();
      }
    }

    if (isNullOrUndefined(criteria)) {
      ref.criteria = Criteria.loadArray([], defaultConfig, useDefaults);
    }

    if (isNullOrUndefined(citation)) {
      ref.citation = [];
    }

    this.title = ref.title;
    this.subtitle = ref.subtitle;
    this.selectTitle = ref.selectTitle;
    this.tableTitle = ref.tableTitle;
    this.repository = ref.repository;
    this.details = ref.details;
    this.criteria = ref.criteria;
    this.citation = ref.citation;
    this.citationFiles = ref.citationFiles;
  }

  static load(json, defaultConfig, useDefaults) {
    Configuration.defaultConfig = defaultConfig;
    if (isNullOrUndefined(json)) {
      return Configuration.empty(useDefaults);
    } else {
      return new Configuration(
        json.title,
        json.subtitle,
        json.selectTitle,
        json.tableTitle,
        json.repository,
        Details.load(json.details, defaultConfig, useDefaults),
        Criteria.loadArray(json.criteria, defaultConfig, useDefaults),
        CitationFiles.load(json.citation, defaultConfig, useDefaults),
        Citation.load(json.citations),
        useDefaults
      );
    }
  }

  static empty(useDefaults) {
    return new Configuration(null, null, null, null, null, null, null, null, null, useDefaults);
  }

  json() {
    return deleteUndefinedKeys({
      title: this.title,
      subtitle: this.subtitle,
      selectTitle: this.selectTitle,
      tableTitle: this.tableTitle,
      repository: this.repository,
      details: this.details ? this.details.json() : null,
      citation: this.citationFiles ? this.citationFiles.json() : null,
      citations: this.citation ? this.citation.map(citation => citation.json()) : null,
      criteria: this.criteria ? this.criteria.map((criteria) => criteria.json()) : null
    });
  }

  setCitation(csl, bibtex) {
    this.citation = Citation.loadArray(csl, bibtex);
    return this;
  }

  hasCitation(key) {
    return this.citation.filter(citation => citation.key === key).length > 0;
  }

  containsCriteria(name) {
    return this.criteria.filter(criteria => criteria.id === name).length > 0;
  }

  setCriteria(index, criteria) {
    if (index >= this.criteria.length || index < 0) {
      this.criteria.push(criteria);
    } else {
      this.criteria.splice(index, 0, criteria);
    }
    return this;
  }

  getCriteria(name) {
    if (this.containsCriteria(name)) {
      return this.criteria.filter(criteria => criteria.id === name)[0];
    } else {
      return null;
    }
  }

  combine(other) {
    this.title = isNullOrUndefined(this.title) ? other.title : this.title;
    this.subtitle = isNullOrUndefined(this.subtitle) ? other.subtitle : this.subtitle;
    this.selectTitle = isNullOrUndefined(this.selectTitle) ? other.selectTitle : this.selectTitle;
    this.tableTitle = isNullOrUndefined(this.tableTitle) ? other.tableTitle : this.tableTitle;
    this.repository = isNullOrUndefined(this.repository) ? other.repository : this.repository;
    this.details = isNullOrUndefined(this.details) ? other.details : this.details;

    this.criteria.forEach(value => {
      if (other.containsCriteria(value.id)) {
        value.combine(other.getCriteria(value.id));
      }
    });

    other.criteria.forEach(value => {
      if (!this.containsCriteria(value.id)) {
        this.setCriteria(-1, value);
      }
    });

    other.citation.forEach(value => {
      if (!this.hasCitation(value.key)) {
        this.citation.push(value);
      }
    });

    this.citationFiles = isNullOrUndefined(this.citationFiles) ? other.citationFiles : this.citationFiles;

    return this;
  }
}

export { Configuration };
