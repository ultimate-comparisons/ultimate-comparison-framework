import * as Showdown from "showdown";

class Tooltip {
  constructor(text, plain, html, latex) {
    this.text = text;
    this.plain = plain;
    this.html = html;
    this.latex = latex;
  }

  static fromHtmlString(string) {
    let html = string;

    // if string contains only one item ("\n-"|"\n*" can not be found) remove the prefix "- "
    html = /^[-*] /.test(html) && !/\n[-*] /.test(html) ? html.substring(1).trim() : html;

    // build latex string (replace [@BIBKEY] with \cite{BIBKEY})
    const latex = (html.replace(/(?:\[@)([^\]]*)(?:])/g, (match, dec) => '\\cite{' + dec + '}') || "").trim();

    // convert plain markdown string to html
    html = new Showdown.Converter().makeHtml(html);

    return new Tooltip("", string, html, latex);
  }
}

export { Tooltip };
