import { CriteriaValue } from './criteriaValue';

export class Criteria {
  public id: string;
  public type: CriteriaTypes;
  public name: string;
  public search: boolean;
  public table: boolean;
  public detail: boolean;
  public description: string;
  public placeholder: string;
  public order: string;
  public andSearch: boolean;
  public rangeSearch: boolean;
  public values: Map<string, CriteriaValue>;
  public lock: Map<string, string>;

  constructor(id: string,
              type: CriteriaTypes,
              name?: string,
              search?: boolean,
              table?: boolean,
              details?: boolean,
              description?: string,
              placeholder?: string,
              order?: string,
              andSearch?: boolean,
              rangeSearch?: boolean,
              values?: Map<string, CriteriaValue>,
              lock?: Map<string, string>,
              useDefaults?: boolean);

  public static copy(id: string, name: string, criteria: Criteria);

  public static empty(key, type, useDefaults?, defaultConfiguration?): Criteria;

  public static load(key, type, json, defaultConfig?, useDefaults?): Criteria;

  public static loadArray(json, defaultConfig?, useDefaults?): Array<Criteria>;

  public getValue(name: string): CriteriaValue;

  public combine(other: Criteria): Criteria;
}

export enum CriteriaTypes {
  NAME_URL = 'NAME_URL',
  LABEL = 'LABEL',
  TEXT = 'TEXT',
  MARKDOWN = 'MARKDOWN',
  RATING = 'RATING',
  REPOSITORY = 'REPOSITORY'
}

export const CriteriaTypeKeys: string[];
