import { isNullOrUndefined } from "../util";

const Cite = require('citation-js');

class Citation {
  constructor(index, key, text) {
    this.index = index;
    this.key = key;
    this.text = text;
  }

  static load(json) {
    const result = [];
    if (!isNullOrUndefined(json)) {
      json.forEach(obj => {
        result.push(new Citation(obj.index, obj.key, obj.text));
      })
    }
    return result;
  }

  static loadArray(csl, bibtex) {
    // Set Citation style (csl)
    if (!isNullOrUndefined(csl)) {
      Cite.CSL.register.addTemplate("defaultParameter", csl.toString());
    }

    // Use citation-js to convert
    const bibtexNormalized = (bibtex || "").toString().replace(/^%.*\n?/gm, '').trim();
    if (bibtexNormalized.length === 0) {
      return [];
    }
    const cite = new Cite(bibtexNormalized, {forceType: 'string/bibtex'});
    return (cite.data || []).map((item, index) => {
      let itemData = new Cite(item);
      const key = item.id;
      const text = (csl ?
          itemData.get({
            type: 'string',
            style: 'citation-defaultParameter'
          }) :
          item.get({type: 'string'})
      ).trim().replace(/\. \./gm, ".");
      return new Citation(index, key, text);
    });
  }

  json() {
    return {
      index: this.index,
      key: this.key,
      text: this.text
    };
  }
}

export {
  Citation
};
