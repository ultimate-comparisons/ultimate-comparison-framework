import { Label } from './label';
import { Criteria, CriteriaTypes } from '../criteria/criteria';

export class CriteriaData {
  public name: string;
  public text: string;
  public labels: Map<string, Label>;
  public labelArray: Array<Label>;
  public type: CriteriaTypes;
  public url: string;
  public rating: number;
  public html: string;
  public latex: string;

  constructor(name: string, text: string, labels: Map<string, Label>, type?: CriteriaTypes, url?: string, html?: string, latex?: string);

  public static loadJson(json, criteria: Criteria): CriteriaData;

  public json();

  public markdown(): string;

  public convertToLables(): Map<string, Label>;

  public getFirstLabel(): Label;
}
