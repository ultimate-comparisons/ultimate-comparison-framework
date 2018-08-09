export class Citation {
  public index: number;
  public key: string;
  public text: string;

  constructor(index: number, key: string, text: string);

  public static load(json): Array<Citation>;

  public static loadArray(csl, bibtex): Array<Citation>;

  public json();
}
