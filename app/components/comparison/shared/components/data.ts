import { Property, ListItem, RatingSet, Rating } from "./../index";
import { isNullOrUndefined } from "util";
import { TableData } from "./table-data";
import { Http } from "@angular/http";
import { ChangeDetectorRef, Inject, Optional } from '@angular/core';
import { RepositoryService } from '../../components/comparison-repository.service';

declare let moment: any;

export class Data {
    @Inject(RepositoryService) private repoData: RepositoryService;

    constructor(public tag: string = "",
                public descr: string = "",
                public url: string = "",
                public properties: {[name: string]: Property;} = {},
                public rating: RatingSet = new RatingSet({})) {
    }

    public getProperty(name: string): Property {
        switch (name) {
            case "tag":
                return new Property(this.tag, this.tag);
            case "descr":
                return new Property(this.descr, this.descr);
            case "url":
                return new Property(this.url, this.url);
            case "Rating":
                return new Property(this.getRating() + "", this.getRating() + "");
            default:
                return this.properties[name] ? this.properties[name] : new Property();
        }
    }

    public getRepoLabels(td: TableData, change: ChangeDetectorRef) {
        console.log(this.repoData)
        const data = this.repoData.getRepositoryData(this.tag);
        if (isNullOrUndefined(data)) {
            return new Property();
        }
        if (!isNullOrUndefined(this.properties[td.tag])) {
            return this.properties[td.tag];
        }
        console.log(data);
        return new Property()
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

    public getRating(): number {
        return this.rating.getAverage();
    }

    public getRatings(): Array<Rating> {
        return this.rating.getRatings();
    }
}