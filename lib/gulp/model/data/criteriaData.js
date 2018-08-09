import { isNullOrUndefined } from "../util";
import { Label } from "./label";
import { CriteriaTypes } from "../criteria/criteria";

class CriteriaData {
  constructor(name, text, labels, type, url, html, latex) {
    const ref = {
      name: name,
      text: text,
      labels: labels,
      type: type,
      url: url
    };

    if (isNullOrUndefined(labels)) {
      ref.labels = [];
    }

    this.name = ref.name;
    this.text = ref.text;
    this.labels = ref.labels;
    this.type = ref.type;
    this.url = ref.url;

    this.html = html;
    this.latex = latex;

    if (this.type === CriteriaTypes.REPOSITORY) {
      if (ref.labels.size > 0) {
        this.url = Array.from(ref.labels).map(([key, value]) => {
          if (this.type !== CriteriaTypes.REPOSITORY) {
            return value.markdown()
          } else {
            return value.repositoryMarkdown();
          }
        }).join("\n");
      }
    }

    if (this.type === CriteriaTypes.RATING) {
      let rating = 0;
      this.labels.forEach((value, key) => {
        rating += value.stars;
      });
      this.rating = rating / this.labels.size;
    }
  }

  static loadJson(json, criteria) {
    const name = json.content;
    let labels = new Map();
    let text = "";
    let type = null;
    if (!isNullOrUndefined(criteria)) {
      type = criteria.type;
    }

    // Type based interpretation
    switch (type) {
      case CriteriaTypes.TEXT:
      case CriteriaTypes.MARKDOWN:
        text = CriteriaData.joinChildren(json.children);
        break;
      case CriteriaTypes.RATING:
        [text, labels] = CriteriaData.getTextAndLabels(json.children, criteria);
        text = CriteriaData.joinChildren(json.children);
        break;
      case CriteriaTypes.REPOSITORY:
      case CriteriaTypes.LABEL:
      default:
        [text, labels] = CriteriaData.getTextAndLabels(json.children, criteria);
    }

    return new CriteriaData(name, text, labels, type);
  }

  static getTextAndLabels(children, criteria) {
    if (!isNullOrUndefined(children) && children.length > 0 && children[children.length - 1].type === "list") {
      return [
        children.length > 1 ? CriteriaData.joinChildren(children.slice(0, children.length - 1)) : "",
        children[children.length - 1].children
          .map(obj => Label.loadJson(obj, criteria)).reduce((map, label) => map.set(label.name, label), new Map())
      ]
    } else {
      return [
        CriteriaData.joinChildren(children),
        new Map()
      ];
    }
  }

  static joinChildren(array) {
    const indent = "    ";
    return (array || [])
      .map(child => {
        if (child.type === "list") {
          return child.children.reduce(
            (arr, obj) => {
              arr.push(`- ${(obj.content || "").concat(
                indent.concat(obj.plainChildren).replace(/\n/gm, "\n".concat(indent))
              )}`);
              return arr;
            }, []).join("\n");
        }
        if (child.type === "text") return child.content;
        if (child.type === "header") return child.plainChildren;
        return null;
      })
      .filter(obj => !isNullOrUndefined(obj))
      .join("\n\n").trim();
  }

  json() {
    const children = [];
    if (!isNullOrUndefined(this.text) && this.text.length > 0) {
      children.push({type: "text", content: this.text});
    }
    if (!isNullOrUndefined(this.labels) && this.labels.size > 0 && this.type !== CriteriaTypes.RATING) {
      const list = {type: "list", level: 2, children: []};
      this.labels.forEach(label => list.children.push(label.json()));
      children.push(list);
    }

    return {
      type: "header",
      level: 2,
      content: this.name,
      children: children
    };
  }

  markdown() {
    const content = [];
    content.push(`\#\# ${this.name}`);
    if (!isNullOrUndefined(this.text) && this.text.length > 0) {
      content.push(this.text);
    }

    if (!isNullOrUndefined(this.labels) && this.labels.size > 0 && this.type !== CriteriaTypes.RATING) {
      content.push(
        Array.from(this.labels).map(([key, value]) => {
          if (this.type !== CriteriaTypes.REPOSITORY) {
            return value.markdown()
          } else {
            return this.url;
          }
        }).join("\n")
      );
    }
    return content.join("\n");
  }

  convertToLabels() {
    return this.labels;
  }

  getFirstLabel() {
    return this.labels.values().next().value;
  }
}

export { CriteriaData };
