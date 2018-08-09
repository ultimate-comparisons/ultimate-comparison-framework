export class Header {
  public nameRef: string;
  public labelRef: string;
  public urlRef: string;

  constructor(nameRef?: string,
              labelRef?: string,
              urlRef?: string,
              useDefaults?: boolean);

  public static load(json, defaultConfig?, useDefaults?): Header;

  public static empty(useDefaults?): Header;

  public json(): Object;
}
