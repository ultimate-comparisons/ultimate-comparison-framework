import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ConfigurationService } from '../configuration/configuration.service';
import { SafeHtml } from '@angular/platform-browser';
import { Criteria, CriteriaData, CriteriaTypes, DataElement, Label } from '../../../../../lib/gulp/model/model.module';

@Component({
    selector: 'comparison-details',
    templateUrl: './comparison.details.template.html',
    styleUrls: ['./comparison.details.component.css']
})
export class ComparisonDetailsComponent implements OnChanges {
    @Input() data: DataElement = new DataElement('placeholder', '', '', new Map());
    @Input() headerLabels: Array<Label> = [];

    @Input() descriptionData: CriteriaData;
    @Input() descriptionCriteria: Criteria;

    @Input() bodyTitle: string = ''

    @Input() tags: Array<CriteriaData> = [];
    @Input() types: Array<CriteriaTypes>;
    @Input() headers: Array<string> = [];
    //@Input() ratings: Array<number> = [];
    @Input() tooltipAsText: boolean = true;

    constructor(public configurationService: ConfigurationService) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.data && this.data && this.data.criteriaData) {
            const configuration = this.configurationService.configuration;
            const details = configuration.details;
            const header = details.header;
            const body = details.body;
            const criteriaDataMap = this.data.criteriaData;

            // Set header labels
            this.headerLabels = (criteriaDataMap.get(header.labelRef)
                || {labelArray: []}).labelArray;

            // Set body title
            this.bodyTitle = body.title || '';

            // Set body description
            this.descriptionData = this.data.getCriteriaData(body.bodyRef);
            this.descriptionCriteria = configuration.getCriteria(body.bodyRef);


            // Set tags (remaining criteriaData)
            const tags: Array<CriteriaData> = [];
            const types: Array<CriteriaTypes> = [];
            const headers: Array<string> = [];


            criteriaDataMap.forEach((criteriaData, key) => {
                const criteria = configuration.getCriteria(key);
                if (criteria && criteria.id !== body.bodyRef && criteria.detail) {
                    tags.push(criteriaData);
                    types.push(criteria.type);
                    if (criteriaData.type !== CriteriaTypes.RATING) {
                        headers.push(criteria.name);
                    } else {
                        headers.push(criteria.name && criteria.name.length > 0 ? criteria.name : criteria.id);
                    }
                }
            });
            this.tags = tags;
            this.types = types;
            this.headers = headers;
        }
    }

    public prefixInternalLink(safeHtml: SafeHtml): SafeHtml {
        const regex = RegExp('<a[^>]*href="#([^"]*)"[^>]*>\\[\\d+\\]</a>', 'g');
        let match;
        const html = safeHtml['changingThisBreaksApplicationSecurity'];
        while ((match = regex.exec(html)) !== null) {
            safeHtml['changingThisBreaksApplicationSecurity'] =
                safeHtml['changingThisBreaksApplicationSecurity'].replace(match[1], 'details-' + match[1])
        }
        return safeHtml;
    }
}
