import { Component, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser'
import { Http, HTTP_PROVIDERS } from '@angular/http';

import { DataFilter } from '../../pipes/datafilter.pipe';
import { JQSelect } from '../select/jq-select';
import { ModalComponentMarkdown } from '../modal/modal';
import { TableFilter }      from '../../pipes/tablefilter.pipe';
import { TableData, Type, LabelCls, Value } from './../shared/index';

@Component({
    selector: 'data-form',
    templateUrl: 'app/templates/main.tpl.html',
    providers: [HTTP_PROVIDERS, Title],
    pipes: [DataFilter, TableFilter],
    directives: [JQSelect, ModalComponentMarkdown]
})
export class DataFormComponent {
    data: Array<any> = new Array<any>();
    dataLoaded: boolean = false;
    
    table: Array<TableData> = new Array<TableData>();
    tableLoaded: boolean = false;
    
    criteria = []
    criteriaLoaded: boolean = false;
    
    detail = {}
    detailLoaded: boolean = false;
    
    comparison = {
        details: "",
        title: ""
    }
    comparisonLoaded: boolean = false;
    
    criteriaSelection = [];
    query = [];
    counter : number;
    
    constructor(http: Http, public title: Title){
        this.counter = 0;
        http.request('app/data/Data.json')
        .subscribe(res => {
            this.data = res.json();
            this.data.forEach(entry => {
                if (entry.tag){
                    let regArray = /^((?:(?:\w+\s*)(?:-?\s*\w+.)*)+)\s*-?\s*((?:http|ftp|https)(?::\/\/)(?:[\w_-]+(?:(?:\.[\w_-]+)+))(?:[\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?)$/gi.exec(entry.tag);
                    entry.url = regArray ? regArray[2]: "";
                    entry.tag = regArray ? regArray[1]: entry.tag;
                }
            })
            this.dataLoaded = true;
        });
                
        http.request('app/data/Table.json')
        .subscribe(res => {
            res.json().forEach(obj => {
                let lcls: LabelCls = new LabelCls();
                if(obj.type.values){
                    obj.type.values.forEach(val => {
                        let value: Value = new Value(val.name, val.description);
                        switch(val.class){
                            case "label-success": 
                                lcls.label_success.push(value);
                                break;
                            case "label-warning": 
                                lcls.label_warning.push(value);
                                break;
                            case "label-danger": 
                                lcls.label_danger.push(value);
                                break;
                            case "label-default": 
                                lcls.label_default.push(value);
                                break;
                            case "label-info": 
                                lcls.label_info.push(value);
                                break;
                            case "label-primary": 
                                lcls.label_primary.push(value);
                                break;
                        }
                    })
                }
                let type: Type = new Type(
                    obj.type.tag,
                    obj.type.class,
                    lcls    
                )
                let td: TableData = new TableData(
                    obj.name,
                    obj.tag,
                    obj.style,
                    obj.display,
                    type
                )
                this.table.push(td);
            })
            this.tableLoaded = true;
        });
        
        http.request('app/data/Comparison.json')
        .subscribe(res => {
            this.comparison = res.json();
            this.comparisonLoaded = true;
            this.detail = this.comparison.details
            this.detailLoaded = true;
            this.title.setTitle(this.comparison.title);
        });
        
        http.request('app/data/Criteria.json')
        .subscribe(res => {
            this.criteria = res.json();
            this.criteria.map(value => {
                //value.id = value.name.replace(/[^a-zA-Z0-9]+/,"");
                value.id = this.counter++;
            })
            this.criteriaLoaded = true;
        });
    }
    
    private CriteriaChanged(value:Array<String>, crit:any ){
        if (value){
            this.query[crit.id] = {
                value: value,
                crit: crit    
            };
        }
    }
    
    @ViewChild(ModalComponentMarkdown) modalcomponent: ModalComponentMarkdown;
    private onShowDetails(data:any){
        this.modalcomponent.open(data, this.detail, this.table);
    }
}
