import { isNullOrUndefined } from "util";

export class Configuration {
    public title: string;
    public subtitle: string;
    public selectTitle: string;
    public tableTitle: string;
    public repository: string;
    public details: Details;
    public criteria: Map<string, Criteria>;
    public citation: Map<string, Citation>;

    constructor(builder) {
        this.title = builder.title || "Ultimate-X-Comparison";
        this.subtitle = builder.subtitle || "Ultimate X configuration framework";
        this.selectTitle = builder.selectTitle || "Criteria";
        this.tableTitle = builder.tableTitle || "Comparison of ...";
        this.repository = builder.repository || "";
        this.details = builder.details || new Details.Builder().build();
        this.criteria = builder.criteria || new Map<string, Criteria>();
        this.citation = builder.citation || new Map<string, Citation>();
    }

    static get Builder() {
        class Builder {
            private title: string;
            private subtitle: string;
            private selectTitle: string;
            private tableTitle: string;
            private repository: string;
            private details: Details;
            private criteria: Map<string, Criteria>;
            private citation: Map<string, Citation>;

            public setTitle(title: string): Builder {
                this.title = title;
                return this;
            }

            public setSubtitle(subtitle: string): Builder {
                this.subtitle = subtitle;
                return this;
            }

            public setSelectTitle(selectTitle: string): Builder {
                this.selectTitle = selectTitle;
                return this;
            }

            public setTableTitle(tableTitle: string): Builder {
                this.tableTitle = tableTitle;
                return this;
            }

            public setRepository(repository: string): Builder {
                this.repository = repository;
                return this;
            }

            public setDetails(details: Details): Builder {
                this.details = details;
                return this;
            }

            public setCriteria(criteria: Map<string, Criteria>): Builder {
                this.criteria = criteria;
                return this;
            }

            public setCitation(citation: Map<string, Citation>): Builder {
                this.citation = citation;
                return this;
            }

            build() {
                return new Configuration(this);
            }
        }

        return Builder;
    }
}

export class Details {
    public header: Header;
    public body: Body;

    constructor(builder) {
        this.header = isNullOrUndefined(builder.header) ? new Header.Builder().build() : builder.header;
        this.body = isNullOrUndefined(builder.body) ? new Body.Builder().build() : builder.body;
    }

    static get Builder() {
        class Builder {
            private header: Header;
            private body: Body;

            public setHeader(header: Header): Builder {
                this.header = header;
                return this;
            }

            public setBody(body: Body): Builder {
                this.body = body;
                return this;
            }

            build() {
                return new Details(this);
            }
        }

        return Builder;
    }
}

export class Header {
    public nameRef: string;
    public labelRef: string;
    public urlRef: string;

    constructor(builder) {
        this.nameRef = isNullOrUndefined(builder.nameRef) ? "id" : builder.nameRef;
        this.labelRef = isNullOrUndefined(builder.labelRef) ? "" : builder.labelRef;
        this.urlRef = isNullOrUndefined(builder.urlRef) ? "inline" : builder.urlRef;
    }

    static get Builder() {
        class Builder {
            private nameRef: string;
            private labelRef: string;
            private urlRef: string;

            public setNameRef(nameRef: string): Builder {
                this.nameRef = nameRef;
                return this;
            }

            public setLabelRef(labelRef: string): Builder {
                this.labelRef = labelRef;
                return this;
            }

            public setUrlRef(urlRef: string): Builder {
                this.urlRef = urlRef;
                return this;
            }

            build() {
                return new Header(this);
            }
        }

        return Builder;
    }
}

export class Body {
    public title: string;
    public bodyRef: string;
    public tooltipAsText: boolean;

    constructor(builder) {
        this.title = isNullOrUndefined(builder.title) ? "Description" : builder.title;
        this.bodyRef = isNullOrUndefined(builder.bodyRef) ? "Description" : builder.bodyRef;
        this.tooltipAsText = isNullOrUndefined(builder.tooltipAsText) ? true : false;
    }

    static get Builder() {
        class Builder {
            private title: string;
            private bodyRef: string;
            private tooltipAsText: boolean;

            public setTitle(title: string): Builder {
                this.title = title;
                return this;
            }

            public setBodyRef(bodyRef: string): Builder {
                this.bodyRef = bodyRef;
                return this;
            }

            public setTooltipAsText(tooltipAsText: boolean): Builder {
                this.tooltipAsText = tooltipAsText;
                return this;
            }

            build(): Body {
                return new Body(this);
            }
        }

        return Builder;
    }
}

export class Criteria {
    public key: string;
    public name: string;
    public search: boolean;
    public table: boolean;
    public detail: boolean;
    public type: CriteriaType;
    public description: string;
    public placeholder: string;
    public andSearch: boolean;
    public rangeSearch: boolean;
    public values: Map<string, CriteriaValue>;
    public items: Array<string>;

    constructor(builder) {
        this.key = builder.key;
        let name: string = isNullOrUndefined(builder.name) ? "" : builder.name;
        this.name = name;
        this.search = isNullOrUndefined(builder.search) ? true : builder.search;
        this.table = isNullOrUndefined(builder.table) ? true : builder.table;
        this.detail = isNullOrUndefined(builder.detail) ? true : builder.detail;
        this.type = isNullOrUndefined(builder.type) ? CriteriaType.label : builder.type;
        this.description = isNullOrUndefined(builder.description) ? (name.length === 0 ? "" :
            name.charAt(0).toUpperCase().concat(name.slice(1), " of entry.")) : builder.description;
        this.placeholder = isNullOrUndefined(builder.placeholder) ? (name.length === 0 ? "" :
            "Select ".concat(name.charAt(0), name.slice(1), " of ...")) : builder.placeholder;
        this.andSearch = isNullOrUndefined(builder.andSearch) ? true : builder.andSearch;
        this.rangeSearch = isNullOrUndefined(builder.rangeSearch) ? false : builder.rangeSearch;
        let values: Map<string, CriteriaValue> = isNullOrUndefined(builder.values) ? new Map<string, CriteriaValue>() : builder.values;
        this.values = values;
        this.items = [];
        values.forEach((value) => {
            this.items.push(value.name);
        });
    }

    static get Builder() {
        class Builder {
            private key: string;
            private name: string;
            private search: boolean;
            private table: boolean;
            private detail: boolean;
            private type: CriteriaType;
            private description: string;
            private placeholder: string;
            private andSearch: boolean;
            private rangeSearch: boolean;
            private values: Map<string, CriteriaValue>;

            public setKey(key: string): Builder {
                this.key = key;
                return this;
            }

            public setSearch(search: boolean): Builder {
                this.search = search;
                return this;
            }

            public setAndSearch(andSearch: boolean): Builder {
                this.andSearch = andSearch;
                return this;
            }

            public setName(name: string): Builder {
                this.name = name;
                return this;
            }

            public setTable(table: boolean): Builder {
                this.table = table;
                return this;
            }

            public setDetail(detail: boolean): Builder {
                this.detail = detail;
                return this;
            }

            public setType(type: CriteriaType): Builder {
                this.type = type;
                return this;
            }

            public setDescription(description: string): Builder {
                this.description = description;
                return this;
            }

            public setPlaceholder(placeholder: string): Builder {
                this.placeholder = placeholder;
                return this;
            }

            public setRangeSearch(rangeSearch: boolean): Builder {
                this.rangeSearch = rangeSearch;
                return this;
            }

            public setValues(values: Map<string, CriteriaValue>): Builder {
                this.values = values;
                return this;
            }

            build() {
                return new Criteria(this);
            }
        }

        return Builder;
    }

    public getSearchIndicator(): string {
        if (this.andSearch) {
            return 'match all';
        }
        if (this.rangeSearch) {
            return 'match range';
        }
        return 'match one';
    }
}

export enum CriteriaType {
    url = 'url',
    label = 'label',
    text = 'text',
    markdown = 'markdown',
    rating = 'rating',
    repository = 'repository'
}

export function getCriteriaType(value: string): CriteriaType {
    switch (value) {
        case "url":
            return CriteriaType.url;
        case "text":
            return CriteriaType.text;
        case "markdown":
            return CriteriaType.markdown;
        case "rating":
            return CriteriaType.rating;
        case "repository":
            return CriteriaType.repository;
        case "label":
            return CriteriaType.label;
        default:
            return null;
    }
}

export class CriteriaValue {
    public criteria: string;
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

    constructor(builder) {
        let criteria: string = isNullOrUndefined(builder.criteria) ? "" : builder.criteria;
        let name: string = isNullOrUndefined(builder.name) ? "" : builder.name;

        this.criteria = criteria;
        this.name = name;
        this.description = isNullOrUndefined(builder.description) ? ((criteria.length === 0 || name.length === 0) ? "" :
            criteria.charAt(0).toUpperCase().concat(criteria.slice(1), " is ", name)) : builder.description;
        this.clazz = isNullOrUndefined(builder.clazz) ? "" : builder.clazz;
        this.color = isNullOrUndefined(builder.color) ? "" : builder.color;
        this.backgroundColor = isNullOrUndefined(builder.backgroundColor) ? "" : builder.backgroundColor;
        this.weight = isNullOrUndefined(builder.weight) ? 1 : builder.weight;
        this.minAge = isNullOrUndefined(builder.minAge) ? -1 : builder.minAge;
        this.maxAge = isNullOrUndefined(builder.maxAge) ? -1 : builder.maxAge;
        this.minAgeUnit = isNullOrUndefined(builder.minAgeUnit) ? "months" : builder.minAgeUnit;
        this.maxAgeUnit = isNullOrUndefined(builder.maxAgeUnit) ? "months" : builder.maxAgeUnit;

        if (isNullOrUndefined(builder.clazz) && isNullOrUndefined(builder.color) && isNullOrUndefined(builder.backgroundColor)) {
            this.backgroundColor = "#777";
        }
    }

    static get Builder() {
        class Builder {
            private criteria: string;
            private name: string;
            private description: string;
            private clazz: string;
            private color: string;
            private backgroundColor: string;
            private weight: number;
            private minAge: number;
            private maxAge: number;
            private minAgeUnit: string;
            private maxAgeUnit: string;

            public setCriteria(criteria: string): Builder {
                this.criteria = criteria;
                return this;
            }

            public setName(name: string): Builder {
                this.name = name;
                return this;
            }


            public setDescription(value: string): Builder {
                this.description = value;
                return this;
            }

            public setClazz(value: string): Builder {
                this.clazz = value;
                return this;
            }


            setColor(value: string): Builder {
                this.color = value;
                return this;
            }

            setBackgroundColor(value: string): Builder {
                this.backgroundColor = value;
                return this;
            }

            public setWeight(value: number): Builder {
                this.weight = value;
                return this;
            }

            public setMinAge(value: number): Builder {
                this.minAge = value;
                return this;
            }

            public setMaxAge(value: number): Builder {
                this.maxAge = value;
                return this;
            }

            public setMinAgeUnit(value: string): Builder {
                this.minAgeUnit = value;
                return this;
            }

            public setMaxAgeUnit(value: string): Builder {
                this.maxAgeUnit = value;
                return this;
            }

            build() {
                return new CriteriaValue(this);
            }
        }

        return Builder;
    }
}

export class Citation {
    public index: number;
    public key: string;
    public text: string;

    constructor(builder) {
        this.index = isNullOrUndefined(builder.index) ? -1 : builder.index;
        if (isNullOrUndefined(builder.key)) {
            console.error("No key given for '".concat(JSON.stringify(builder), "'"));
            this.key = "undefined";
        } else {
            this.key = builder.key;
        }
        ;
        this.text = isNullOrUndefined(builder.text) ? "" : builder.text;
    }

    static get Builder() {
        class Builder {
            private index: number;
            private key: string;
            private text: string;

            public setIndex(index: number): Builder {
                this.index = index;
                return this;
            }

            setKey(value: string): Builder {
                this.key = value;
                return this;
            }

            public setText(value: string): Builder {
                this.text = value;
                return this;
            }

            build() {
                return new Citation(this);
            }
        }

        return Builder;
    }
}
