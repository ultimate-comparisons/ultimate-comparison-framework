import { Component, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser'
import { Http, HTTP_PROVIDERS } from '@angular/http';
import { TOOLTIP_DIRECTIVES } from 'ng2-bootstrap/components/tooltip';
import * as showdown from 'showdown';

import { DataFilter } from '../../pipes/datafilter.pipe';
import { JQSelect } from '../select/jq-select';
import { ModalComponentMarkdown } from '../modal/modal';
import { TableFilter }      from '../../pipes/tablefilter.pipe';
import { TableData, Type, LabelCls, Value, Data, Property, ListItem } from './../shared/index';

@Component({
    selector: 'data-form',
    templateUrl: 'app/templates/main.tpl.html',
    providers: [HTTP_PROVIDERS, Title],
    pipes: [DataFilter, TableFilter],
    directives: [JQSelect, ModalComponentMarkdown, TOOLTIP_DIRECTIVES]
})
export class DataFormComponent {
    data: Array<Data> = new Array<Data>();
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
    
    private converter: Showdown.Converter;
    
    constructor(private http: Http, public title: Title){
        this.counter = 0;
        this.converter = new showdown.Converter();      
        http.request('app/data/Table.json')
        .subscribe(res => {
            res.json().forEach(obj => {
                let lcls: LabelCls = new LabelCls();
                var values: {[name: string]: string;} = { };
                if(obj.type.values){
                    obj.type.values.forEach(val => {
                        let value: Value = new Value(val.name, val.description);
                        values[val.name] = val.description;
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
                    type,
                    values
                )
                this.table.push(td);
            })
            this.tableLoaded = true;
            this.readData();
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
                value.id = this.counter++;
            })
            this.criteriaLoaded = true;
        });
    }
    
    private readData(){
         this.http.request('app/data/Data.json')
        .subscribe(res => {
            res.json().forEach(obj => {
                let data: Data = new Data();
                data.tag = obj.tag;
                let regArray = /^((?:(?:\w+\s*)(?:-?\s*\w+.)*)+)\s*-?\s*((?:http|ftp|https)(?::\/\/)(?:[\w_-]+(?:(?:\.[\w_-]+)+))(?:[\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?)$/gi.exec(data.tag);
                data.url = regArray ? regArray[2]: "";
                data.tag = regArray ? regArray[1]: data.tag;
                for(let key in obj){
                    if (!obj.hasOwnProperty(key)) continue;
                    switch(key){
                        case "tag":
                            break;
                        case "descr":
                            data.descr = obj[key];
                            break;
                        case "Description":
                            data.properties[key] = new Property(obj[key].plain);
                            break;
                        default:
                            let p:Property = new Property();
                            p.plain = obj[key].plain
                            if (this.getTableData(key) && this.getTableData(key).type.tag == "text"){
                                p.text == obj[key].text
                            } else {
                                if(typeof obj[key].childs[0][0] != 'string'){
                                    obj[key].childs[0][0].forEach(item => {
                                        let content: string = item.content;
                                        let plainChilds: string = item.plainChilds;
                                        let itm: ListItem = new ListItem(content, plainChilds, this.converter);
                                        p.list.push(itm);
                                    });    
                                }
                            }
                            data.properties[key] = p;
                            break;
                    } 
                };
                this.data.push(data); 
            });
            
            this.dataLoaded = true;
        });
    }
    
    public getTableData(name: string): TableData{
        let result: TableData;
        this.table.forEach(entry => {
            if(entry.tag == name) {
                result = entry;
                return entry;
            }
        })
        return result;
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
    private onShowDetails(data:Data){
        this.modalcomponent.open(data, this.detail, this.table);
    }
}
