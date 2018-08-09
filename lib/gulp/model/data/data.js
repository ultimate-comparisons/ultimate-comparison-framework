import { DataElement } from "./dataElement";

class Data {
  constructor(dataElements) {
    this.dataElements = dataElements;
  }

  static loadJson(json, configuration) {
    const dataElements = (json || [])
      .filter(obj => obj.type === "header")
      .map(obj => DataElement.loadJson(obj, configuration));

    return new Data(dataElements);
  }

  json() {
    return this.dataElements.map(element => element.json());
  }

  markdown() {
    return this.dataElements.map(element => element.markdown());
  }
}

export { Data };
