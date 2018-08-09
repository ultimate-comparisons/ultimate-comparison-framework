export class CitationFiles {
  public csl: string;
  public bib: string;

  constructor(csl?: string,
              bib?: string,
              useDefaults?: boolean);

  public static load(json, defaultConfig?, useDefaults?): CitationFiles;

  public static empty(useDefaults?): CitationFiles;

  public json(): string;
}
