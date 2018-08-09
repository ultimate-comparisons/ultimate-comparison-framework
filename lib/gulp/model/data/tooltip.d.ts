export class Tooltip {
  public text: string;
  public plain: string;
  public html: string;
  public latex: string;

  constructor(text?: string, plain?: string, html?: string, latex?: string);

  public static fromHtmlString(string): Tooltip;
}
