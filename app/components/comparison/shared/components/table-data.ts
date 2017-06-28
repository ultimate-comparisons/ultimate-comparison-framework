import { Type } from "./type";

export class TableData {
    constructor(public name: string = "",
                public tag: string = "",
                public url: string = "",
                public style: string = "",
                public display: boolean = false,
                public type: Type = new Type(),
                public values: {[name: string]: {tag: string, weight: number};} = {},
                public sort: number = 0,
                public order: string = 'asc') {
    }
}