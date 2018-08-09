export class CriteriaValue {
  public criteriaName: string;
  public name: string;
  public description: string;
  public clazz: string;
  public color: string;
  public backgroundColor: string;
  public weight: number;
  public minAge: number;
  public maxAge: number;
  public minAgeUnit: string;
  public maxAgeUnit: string;

  constructor(criteriaName: string,
              name: string,
              description?: string,
              clazz?: string,
              color?: string,
              backgroundColor?: string,
              weight?: number,
              minAge?: number,
              maxAge?: number,
              minAgeUnit?: string,
              maxAgeUnit?: string);

  public static loadJson(criteriaName, name, json);

  public json(): string;

  public hasColor(): boolean;

  public combine(other: CriteriaValue): CriteriaValue;
}
