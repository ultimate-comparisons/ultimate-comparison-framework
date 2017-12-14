import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ConfigurationService } from "../configuration/configuration.service";
import { Data, Label, Markdown, Rating, Text, Url } from "../data/data";
import { Criteria } from "../configuration/configuration";

@Component({
    selector: 'comparison-details',
    templateUrl: './comparison.details.template.html',
    styleUrls: ['./comparison.details.component.css']
})
export class ComparisonDetailsComponent implements OnChanges {
    @Input() data: Data = new Data.Builder().build();

    @Input() headerLabels: Array<Label> = [];
    @Input() description: string = "";
    @Input() bodyTitle: string = "";
    @Input() tags: Array<Array<Label> | Markdown | Text | Url> = [];
    @Input() types: Array<number>;
    @Input() headers: Array<string> = [];
    @Input() ratings: Array<Rating> = [];


    // TODO move to redux
    @Input() tooltipAsText: boolean = true;

    constructor(public configurationService: ConfigurationService) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.data && this.data && this.data.criteria) {
            let headerLabels: Array<Label> = [];
            let cS = this.configurationService.configuration;
            let cD = this.data.criteria;
            const criteria: any = cD.get(cS.details.header.labelRef);
            if (criteria instanceof Map) {
                criteria.forEach(label => headerLabels.push(label));
            }
            this.headerLabels = headerLabels;

            this.bodyTitle = this.configurationService.configuration.details.body.title || "";

            let description: any = this.data.criteria.get(this.configurationService.configuration.details.body.bodyRef);
            if (description instanceof Markdown) {
                this.description = description.htmlContent;
            } else if (description instanceof Text) {
                this.description = description.content;
            }

            let tags: Array<Array<Label> | Markdown | Text | Url> = [];
            let types: Array<number> = [];
            let headers: Array<string> = [];
            let ratings: Array<Rating> = [];
            const criteriaMap: Map<string, Criteria> = this.configurationService.configuration.criteria;
            this.data.criteria.forEach((criteria, key) => {
                const criteriaConf = criteriaMap.get(key);
                if (criteriaConf.detail) {
                    if (criteria instanceof Map) {
                        let labels: Array<Label> = [];
                        criteria.forEach(c => labels.push(c));
                        tags.push(labels);
                        types.push(criteriaConf.type);
                        headers.push(criteriaConf.name);
                    } else if (criteria instanceof Array) {
                        let labels: Array<Label> = [];
                        criteria.forEach(item => {
                            if (item instanceof Label) labels.push(item);
                            if (item instanceof Rating) ratings.push(item);
                        });
                        if (labels.length > 0) {
                            this.tags.push(labels);
                            types.push(criteriaConf.type);
                            headers.push(criteriaConf.name);
                        }
                    } else {
                        tags.push(criteria);
                        types.push(criteriaConf.type);
                        headers.push(criteriaConf.name);
                    }
                }
            });
            this.tags = tags;
            this.types = types;
            this.headers = headers;
            this.ratings = ratings;
        }

        // TODO (re)move to redux
        this.tooltipAsText = this.configurationService.configuration.details.body.tooltipAsText;
    }
}
