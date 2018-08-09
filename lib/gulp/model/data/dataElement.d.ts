import { CriteriaData } from './criteriaData';

export class DataElement {
  public name: string;
  public url: string;
  public description: string;
  public criteriaData: Map<string, CriteriaData>;
  public html: string;
  public latex: string;

  constructor(name: string, url: string, description: string, criteriaData: Map<string, CriteriaData>, averageRating?: number, html?: string, latex?: string);

  public static loadJson(json, configuration): DataElement;

  public json();

  public markdown(): string;

  public getCriteriaData(id: string): CriteriaData;

  // Return criteriaData + criteriaData for (name,url) and (description)
  public getCriteriaDataExtended(): Array<CriteriaData>;
}
