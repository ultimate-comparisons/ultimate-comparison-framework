import { isNullOrUndefined, splitNameUrl } from "../util";
import { CriteriaData } from "./criteriaData";
import { CriteriaTypes } from "../criteria/criteria";

class DataElement {
  constructor(name, url, description, criteriaData, averageRating, html, latex) {
    const ref = {
      name: name,
      url: url,
      description: description,
      criteriaData: criteriaData,
      averageRating: averageRating,
    };

    if (isNullOrUndefined(criteriaData)) {
      ref.criteriaData = new Map();
    }

    this.name = ref.name;
    this.url = ref.url;
    this.description = ref.description;
    this.criteriaData = ref.criteriaData;
    this.averageRating = ref.averageRating;

    this.html = html;
    this.latex = latex;
  }

  static loadJson(json, configuration) {
    const indent = "    ";
    const nameUrl = splitNameUrl(json.content);

    const name = nameUrl.name;
    const url = nameUrl.url;
    const description = (json.children || [])
      .filter(obj => obj.type !== "header")
      .map(obj => {
        if (obj.type === "text") return obj.content;
        if (obj.type === "list") return obj.children.reduce(
          (arr, label) => {
            arr.push(`- ${(label.content || "").concat(
              indent.concat(label.plainChildren).replace(/\n/gm, "\n".concat(indent))
            )}`);
            return arr;
          }, []).join("\n");
        return null;
      })
      .filter(obj => !isNullOrUndefined(obj))
      .join("\n\n") || "";

    const criteriaData = (json.children || []).filter(obj => obj.type === "header")
      .filter(obj => !isNullOrUndefined(obj))
      .map(obj => CriteriaData.loadJson(obj,
        isNullOrUndefined(configuration) || !configuration.containsCriteria(obj.content) ?
          null :
          configuration.getCriteria(obj.content)
      )).reduce((map, criteriaData) => map.set(criteriaData.name, criteriaData), new Map());

    return new DataElement(name, url, description, criteriaData)
  }

  json() {
    const children = [];
    children.push({type: "text", content: this.description});
    this.criteriaData.forEach(criteriaData => children.push(criteriaData.json()));

    return {
      type: "header",
      level: 1,
      content: isNullOrUndefined(this.url) || this.url.length === 0 ? this.name : this.name.concat(" - ", this.url),
      children: children
    };
  }

  markdown() {
    const content = [];
    const description = this.description || "";
    content.push(`\# ${this.name} - ${this.url}\n${description}`);
    this.criteriaData.forEach(criteriaDataElement => content.push(criteriaDataElement.markdown()));
    return content.join("\n\n");
  }

  getCriteriaData(id) {
    if (id === 'id') {
      return new CriteriaData('id', this.name, new Map(), CriteriaTypes.NAME_URL, this.url);
    } else if (id === 'description') {
      return new CriteriaData('description', this.description, new Map(), CriteriaTypes.MARKDOWN, this.url, this.html, this.latex);
    } else {
      return this.criteriaData.get(id);
    }
  }

  getCriteriaDataExtended() {
    return [
      this.getCriteriaData('id'),
      this.getCriteriaData('description'),
      ...Array.from(this.criteriaData).map(([key, value]) => value)
    ];
  }
}

export { DataElement };
