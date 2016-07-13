import { Component, ViewChild, ElementRef, ApplicationRef, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { Modal, BS_MODAL_PROVIDERS } from 'angular2-modal/plugins/bootstrap/index';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { TOOLTIP_DIRECTIVES } from 'ng2-bootstrap/components/tooltip';
import * as showdown from 'showdown';

import { ArrayFilter } from  '../../pipes/arrayfilter.pipe';
import { ObjectFilter } from  '../../pipes/objectfilter.pipe';
import { TableData, Type, LabelCls, Value, Data, Property, ListItem } from './../shared/index';


@Component({
    selector: 'modalcomponent',
    templateUrl: 'app/templates/details.tpl.html',
    directives: [ ...ROUTER_DIRECTIVES, TOOLTIP_DIRECTIVES],
    viewProviders: [...BS_MODAL_PROVIDERS],
    pipes: [ArrayFilter, ObjectFilter]
})
export class ModalComponentMarkdown{
    private modalSelected: string;
    private selected: string;
    private converter: any;
    private template: string;
    private data;
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
    
    constructor(private modal:Modal, private elementRef:ElementRef, private ref: ApplicationRef, viewContainer: ViewContainerRef) {
        this.converter = new showdown.Converter();
        modal.defaultViewContainer = viewContainer;
    }
    
    closed(){
        this.selected='(closed) '+ this.modalSelected;
    }
    
    dismissed(){
        this.selected='(dismissed)';
    }
    
    open(data:Data, detail:any, table:Array<TableData>){
        if (this.data==data){
            this.openModal();
        } else {
            this.table = table;
            this.detail = detail;
            this.description = this.converter.makeHtml(data.getProperty(detail.body).plain);
            this.data= data;
            this.header.text = data[detail.header];
            this.header.url = data[detail["header-url"]];
            
            this.header.column =  table.find(obj => obj.tag == detail["header-label"]);
            this.header.label = this.header.column.type;
            
            this.ref.tick();
            this.header.html = this.elementRef.nativeElement.children.header.innerHTML;
            this.body = this.elementRef.nativeElement.children.body.innerHTML;
            this.openModal();
        }
    }
    
    openModal(){
        this.modal.alert()
            .titleHtml(this.header.html)
            .size('lg')
            .body(this.body)
            .open();
    }
}