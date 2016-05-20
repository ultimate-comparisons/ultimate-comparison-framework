import {Component, ContentChild, ViewChild}          from '@angular/core';
import { Title }            from '@angular/platform-browser'
import {NgForm}             from '@angular/common';
import {NgClass}            from '@angular/common';
import {HTTP_PROVIDERS}     from '@angular/http';
import {Http}               from '@angular/http';
import {DataFilter}         from '../../pipes/datafilter.pipe';
import {JQSelect}           from '../select/jq-select';
import {ModalComponentMarkdown} from '../modal/modal';
import {Directive, ElementRef, Renderer, Input,AfterViewInit} from '@angular/core';
import { TableFilter }      from '../../pipes/tablefilter.pipe';

import {Injectable} from '@angular/core';


@Component({
    selector: 'data-form',
    templateUrl: 'app/templates/main.tpl.html',
    providers: [HTTP_PROVIDERS, Title],
    pipes: [DataFilter, TableFilter],
    directives: [JQSelect, ModalComponentMarkdown]
})

export class DataFormComponent {
    data = {}
    dataLoaded: boolean = false;
    
    table = []
    tableLoaded: boolean = false;
    
    criteria = []
    criteriaLoaded: boolean = false;
    
    detail = {}
    detailLoaded: boolean = false;
    
    comparision = {}
    comparisionLoaded: boolean = false;
    
    criteriaSelection = [];
    title: Title;;
    query = [];
    counter : number;
    
    constructor(http: Http, title: Title){
        this.counter = 0;
        this.title = title;
        http.request('app/data/Data.json')
        .subscribe(res => {
            this.data = res.json();
            this.dataLoaded = true;
        });
                
        http.request('app/data/Table.json')
        .subscribe(res => {
            this.table = res.json();
            this.tableLoaded = true;
        });
        
        http.request('app/data/Comparision.json')
        .subscribe(res => {
            this.comparision = res.json();
            this.comparisionLoaded = true;
            this.detail = this.comparision.details
            this.detailLoaded = true;
            this.title.setTitle(this.comparision.title);
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
