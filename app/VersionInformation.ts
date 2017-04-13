import { Http } from "@angular/http";
import { Injectable } from "@angular/core";

export class VersionInformation {
    private promise: Promise<any>;
    public date: Date;
    public commit: string;
    public link: string;

    public prepare(http: Http) {
        this.promise = http.get('app/components/comparison/data/version.json')
            .map(res => res.json()).toPromise();
    }

    public fillFields() {
        this.promise.then(res => {
            this.date = new Date(res.date);
            this.commit = res.commit;
            this.link = res.link;
        });
    }
}
