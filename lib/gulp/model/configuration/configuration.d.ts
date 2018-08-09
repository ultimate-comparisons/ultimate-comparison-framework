import { CitationFiles } from '../citation/citationFiles';
import { Criteria } from '../criteria/criteria';
import { Details } from '../details/details';
import { Citation } from '../citation/citation';

export class Configuration {
  public title: string;
  public subtitle: string;
  public selectTitle: string;
  public tableTitle: string;
  public repository: string;
  public details: Details;
  public criteria: Array<Criteria>;
  public citation: Array<Citation>;
  public citationFiles: CitationFiles;

  constructor(title?: string,
              subtitle?: string,
              selectTitle?: string,
              tableTitle?: string,
              repository?: string,
              details?: Details,
              criteria?: Array<Criteria>,
              citation?: CitationFiles,
              useDefaults?: boolean);

  public static load(json, defaultConfig?, useDefaults?): Configuration;

  public static empty(useDefaults?): Configuration;

  public json(): Object;

  public setCitation(csl: string, bibtex: string): Configuration;

  public hasCitation(key: string): boolean;

  public containsCriteria(name: string): boolean;

  public setCriteria(index: number, criteria: Criteria): Configuration;

  public getCriteria(name: string): Criteria;

  public combine(other: Configuration): Configuration;

}
