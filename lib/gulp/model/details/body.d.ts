export class Body {
  public title: string;
  public bodyRef: string;

  constructor(title?: string,
              bodyRef?: string,
              useDefaults?: boolean);

  public static load(json, defaultConfig?, useDefaults?): Body;

  public static empty(useDefaults?): Body;

  public json(): Object;
}
