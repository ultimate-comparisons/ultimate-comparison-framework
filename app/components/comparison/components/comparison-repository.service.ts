import { Injectable } from '@angular/core';
import { RepositoryData } from '../shared/components/repository-data';
import { Http } from '@angular/http';
import { ComparisonDataService } from './comparison-data.service';
import { isNullOrUndefined } from 'util';
import { LocalStorageService } from 'angular-2-local-storage';

declare const moment;

@Injectable()
export class RepositoryService {
    private repositoryDataSet: {repos: {[name: string]: RepositoryData}, timestamp?: Date } = {repos: {}};
    private oneHour = 3600 * 1000;

    constructor(private http: Http,
                private comparisonData: ComparisonDataService,
                private lss: LocalStorageService) {
    }

    public getRepositoryData(name: string): Promise<RepositoryData> {
        if (!this.repositoryDataSet.repos.hasOwnProperty(name)) {
            return null;
        }

        const data = this.repositoryDataSet.repos[name];

        console.log("before");
        console.log(this.repositoryDataSet);
        console.log("after");
        if (moment(new Date()).diff(data.timestamp) >= this.oneHour) {
            this.querySources();
        }
        return new Promise(function (resolve, reject) {
            resolve(data);
        });
    }

    private querySources() {
        const self = this;
        const file = [];
        this.repositoryDataSet.timestamp = new Date();
        for (const data of this.comparisonData.getData()) {
            if (isNullOrUndefined(data.properties["Repo"])) {
                continue;
            }
            const url = this.repoQueryBuildUrl(data.properties["Repo"].list[0].content);
            this.http.get(url).map(res => res.json()).subscribe(
                res => {
                    file.push({
                        name: data.tag,
                        repository: url,
                        latestCommit: new Date(res[0].commit.author.date)
                    });
                    self.repositoryDataSet.repos[data.tag] = new RepositoryData(url, new Date(), new Date(res[0].commit.author.date));
                    console.log(self.repositoryDataSet);
                    self.lss.set('repoData', self.repositoryDataSet);
                },
                err => {
                    console.log(err);
                }
            )
        }
    }

    private repoQueryBuildUrl(repoUrl: string) {
        let url: string;
        if (/https?:\/\/github\.com.*/.test(repoUrl)) {
            url = repoUrl.replace(/https?:\/\/github.com/, "https://api.github.com/repos");
            url += url.endsWith("/") ? "commits" : "/commits";
        }
        return url;
    }
}