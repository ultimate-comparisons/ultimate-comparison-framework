import { Property, ListItem, RatingSet, Rating } from "./../index";
import { isNullOrUndefined } from "util";
import { TableData } from "./table-data";
import { Http } from "@angular/http";
import { ChangeDetectorRef } from "@angular/core";

declare let moment: any;

export class Data {
    private repoLabels: {[column: string]: Array<{htmlChilds: string, content: string}>} = {};

    constructor(private http: Http,
                public tag: string = "",
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
        if (isNullOrUndefined(this.properties["Repo"]) || isNullOrUndefined(this.properties["Repo"].list[0])) {
            return new Property();
        }
        if (!isNullOrUndefined(this.properties[td.tag])) {
            return this.properties[td.tag];
        }
        const repoUrl: string = this.properties["Repo"].list[0].content;
        const url = this.repoQueryBuildUrl(repoUrl);
        if (url === "") {
            return new Property();
        }
        this.http.get(url).toPromise().then(res => {
            const d: any = {};
            const commitDate = new Date(res.json()[0].commit.author.date);
            let child: string = "The last commit is ";
            const cd = moment(commitDate);
            const now = moment();
            const dateStrings = ['years', 'months', 'days', 'hours', 'minutes', 'seconds'];
            for (const s of dateStrings) {
                const diff = Math.abs(now.diff(cd, s));
                if (diff !== 0) {
                    child += diff;
                    // append unit in singular or plural
                    child += " " + (diff === 1 ? s.substr(0, s.length - 1) : s);
                    break;
                }
            }
            child += " old";
            d.htmlChilds = child;
            for (const value in td.values) {
                if (isNullOrUndefined(td.values[value]["min-age"])) {
                    continue;
                }
                const min = td.values[value]["min-age"];

                const minUnit = td.values[value]["min-age-unit"];
                const minDiff = Math.abs(now.diff(cd, minUnit));
                const max = td.values[value]["max-age"];

                const maxUnit = td.values[value]["max-age-unit"];
                const maxDiff = Math.abs(now.diff(cd, maxUnit));
                // min === -1 => no limit
                // same for max

                let property: Property;
                for (const prop in this.properties) {
                    if (prop === td.tag) {
                        property = this.properties[prop];
                        break;
                    }
                }
                if (isNullOrUndefined(property)) {
                    property = new Property();
                }
                if ((min === -1 || min <= minDiff) && (max === -1 || max > maxDiff)) {
                    d.content = value;
                    for (const item of property.list) {
                        if (item.content === d.content) {
                            property.list.splice(property.list.indexOf(item), 1);
                        }
                    }
                    property.list.push(d);
                    property.plain += " " + (cd.unix() - now.unix());
                    property.plain = property.plain.trim();
                }
                this.properties[td.tag] = property;
            }
            change.markForCheck();
        });
        return new Property()
    }

    private repoQueryBuildUrl(repoUrl: string) {
        let url: string;
        if (/https?:\/\/github\.com.*/.test(repoUrl)) {
            url = repoUrl.replace(/https?:\/\/github.com/, "https://api.github.com/repos");
            url += url.endsWith("/") ? "commits" : "/commits";
        }
        return url;
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