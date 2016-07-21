import { Component, ViewChild, ElementRef} from '@angular/core';
import { TOOLTIP_DIRECTIVES } from 'ng2-bootstrap/components/tooltip';
import * as showdown from 'showdown';
import {DomSanitizationService} from '@angular/platform-browser';

import { PolymerElement } from '@vaadin/angular2-polymer';

import { ArrayFilter } from  '../../pipes/arrayfilter.pipe';
import { ObjectFilter } from  '../../pipes/objectfilter.pipe';
import { TableData, Type, LabelCls, Value, Data, Property, ListItem } from './../shared/index';


@Component({
    selector: 'modalcomponent',
    templateUrl: '../../templates/details.tpl.html',
    directives: [
        TOOLTIP_DIRECTIVES,
        PolymerElement('paper-dialog'), 
        PolymerElement('paper-button'), 
        PolymerElement('paper-card')
    ],
    pipes: [ArrayFilter, ObjectFilter],
    styleUrls: ['./style.css'],
    moduleId: module.id
})
export class ModalComponentMarkdown{
    @ViewChild('details') dialog: ElementRef;
    @ViewChild('modalcontainer') container: ElementRef;
    private opened: boolean = false;
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
    
    constructor(private _sanitizer: DomSanitizationService) {
        this.converter = new showdown.Converter();
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
            this.openModal();
        }
    }
    
    openModal(){
        if(this.dialog){
            document.body.classList.add('modal-open');
            this.container.nativeElement.classList.add('mc-opened');
            this.dialog.nativeElement.open(); 
            this.dialog.nativeElement.modal = true;
        }
    }
    
    closeModal(){
        if(this.dialog){
            document.body.classList.remove('modal-open');
            this.container.nativeElement.classList.remove('mc-opened');
            this.dialog.nativeElement.close();
        }
    }
}