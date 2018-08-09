import { Header } from './header';
import { Body } from './body';

export class Details {
  public header: Header;
  public body: Body;
  public tooltipAsText: boolean;

  constructor(header?: Header,
              body?: Body,
              useDefaults?: boolean)

  public static load(json, defaultConfig?, useDefaults?): Details;

  public static empty(useDefaults?): Details;

  public json(): Object;
}




