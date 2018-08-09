import { Tooltip } from './tooltip';
import { Criteria } from '../criteria/criteria';

export class Label {
  public name: string;
  public tooltip: Tooltip;

  public clazz: string;
  public color: string;
  public backgroundColor: string;

  public stars: number;
  public comment: string;

  constructor(name: string, tooltip?: string, clazz?: string, color?: string, backgroundColor?: string, stars?: number, comment?: string);

  public static loadJson(json, criteria: Criteria): Label;

  public json();

  public markdown(): string;

  public repositoryMarkdown(): string;

  public setClazz(clazz: string): void;

  public setColor(color: string): void;

  public setBackgroundColor(backgroundColor: string): void;

}
