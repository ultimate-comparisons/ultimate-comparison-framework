import { Component, Input, Output } from '@angular/core';

import { TableData, Type, LabelCls, Value, Data, Property, ListItem } from '../shared/index';

import { ComparisonConfigService } from './comparison-config.service';
import { ComparisonDataService } from './comparison-data.service';
import { ComparisonService } from './comparison.service';
import { ComparisonCitationService } from './comparison-citation.service';

@Component({
    selector: 'comparison-details',
    templateUrl: '../templates/comparison-details.template.html',
    styleUrls: ['../styles/style.css'],
    moduleId: module.id
})
export class ComparisonDetailsComponent{
    @Input() data: Data;
    
    private opened: boolean = false;
    private modalSelected: string;
    private selected: string;
    private template: string;
    private body: string;
    private description;
    private table;
    private detail;
    private header = {
        html:"",
        text:"",
        label:{},
        url:"",
        column:new TableData(),
    };
    
    constructor(
            public serv: ComparisonService,
            public dataServ: ComparisonDataService,
            public confServ: ComparisonConfigService,
            public citationServ: ComparisonCitationService
        ) {}
 
    private getBody(): string{
        return this.confServ.comparison ? this.serv.converter.makeHtml(this.data.getProperty(this.confServ.comparison.details.body).plain) : "";
    }
    
    private getHeaderText(): string{
        return this.confServ.comparison ? this.data[this.confServ.comparison.details.header] : "";
    }
    
    private getHeaderUrl(): string{
        return this.confServ.comparison ? this.data[this.confServ.comparison.details.headerUrl] : "";
    }
    
    private getHeaderColumn(): TableData{
        return (this.confServ.comparison && this.confServ.tableDataSet) ? this.confServ.tableDataSet.getTableData(this.confServ.comparison.details.headerLabel) : new TableData();
    }
    
    private getHeaderLabel(): Type{
        return (this.confServ.comparison && this.confServ.tableDataSet) ? this.confServ.tableDataSet.getTableData(this.confServ.comparison.details.headerLabel).type : new Type();
    }
    
    private getTable(tag: string): TableData{
        return this.confServ.tableDataSet ? this.confServ.tableDataSet.getTableData(tag) : new TableData();
    }
}