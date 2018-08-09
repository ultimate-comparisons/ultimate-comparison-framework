import { DataElement } from './dataElement';

export class Data {
  public dataElements: Array<DataElement>;

  constructor(dataElement: Array<DataElement>);

  public static loadJson(json, configuration): Data;

  public json();

  public markdown(): Array<string>;
}
