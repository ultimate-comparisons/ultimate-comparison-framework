import { Property, ListItem } from "./../index";

export class Data {
    constructor(public tag: string = "",
                public descr: string = "",
                public url: string = "",
                public properties: {[name: string]: Property;} = {}) {
    }

    public getProperty(name: string): Property {
        switch (name) {
            case "tag":
                return new Property(this.tag, this.tag);
            case "descr":
                return new Property(this.descr, this.descr);
            case "url":
                return new Property(this.url, this.url);
            default:
                return this.properties[name] ? this.properties[name] : new Property();
        }
    }

    public getPropertyTags(name: string): Array<string> {
        let tagList: Array<string> = new Array<string>();
        let p: Property = this.getProperty(name);
        p.list.forEach(item => {
            tagList.push(item.content);
        });
        return tagList;
    }

    public getPropertyListItems(name: string): Array<ListItem> {
        return this.getProperty(name).list;
    }
}