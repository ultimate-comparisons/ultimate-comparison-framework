import { Injectable, ChangeDetectorRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TableDataSet, CriteriaSet, Comparison, TableData } from './../shared/index';
import { ComparisonDataService } from './comparison-data.service';
import { ComparisonService } from './comparison.service';
import { ComparisonComponent } from './comparison.component';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ComparisonConfigService {
    public tableDataSet = new TableDataSet();
    public criteriaSet: CriteriaSet;
    public comparison: Comparison;
    public description: string;
    public displayAllName = 'All';
    public displayAll: boolean;

    constructor(public title: Title,
                private http: HttpClient,
                private comparisonDataService: ComparisonDataService,
                private comparisonService: ComparisonService) {
    }

    public loadTableData(cd: ChangeDetectorRef) {
        this.http.get<any>('comparison-configuration/comparison.json')
            .subscribe(res => {
                this.tableDataSet.load(res.criteria);
                cd.markForCheck();
                this.comparisonDataService.loadData(this.tableDataSet, cd);
            });
    }

    public loadCriteria(cd: ChangeDetectorRef) {
        this.http.get('comparison-configuration/comparison.json')
            .subscribe(res => {
                this.criteriaSet = new CriteriaSet(res);
                cd.markForCheck();
            });
    }

    public loadComparison(cd: ChangeDetectorRef) {
        this.http.get('comparison-configuration/comparison.json')
            .subscribe(res => {
                this.comparison = new Comparison(res);
                this.title.setTitle(this.comparison.title);
                cd.markForCheck();
            });
    }

    public loadDescription(cd: ChangeDetectorRef) {
        this.http.get('comparison-configuration/description.md', {responseType: 'text'})
            .subscribe(res => {
                this.description = this.comparisonService.converter.makeHtml(res);
                cd.markForCheck();
            });
    }

    public getBodyAttachmentTags(): Array<string> {
        if (!this.comparison) {
            return [];
        }
        const forbiddenTags: Array<string> = this.comparison.details.disabledBodyAttachmentTags;
        const tags = this.tableDataSet.getTableDataArray().filter(data => forbiddenTags.indexOf(data.tag) !== -1).map(data => data.tag);
        return tags;
    }

    public displayAllChange(toggle: boolean, self: ComparisonComponent) {
        if (this.tableDataSet) {
            this.tableDataSet.getTableDataArray().forEach((item) => {
                item.display = toggle;
            });
            this.displayAllName = toggle ? 'None' : 'All';
            self.change();
        }
    }

    public displayChange(column: TableData, self: ComparisonComponent) {
        column.display = !column.display;
        self.change();
    }
}
