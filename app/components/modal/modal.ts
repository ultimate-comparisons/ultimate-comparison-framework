import { Component, ViewChild, ElementRef, ApplicationRef, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { Modal, MODAL_PROVIDERS } from 'angular2-modal/angular2-modal';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import { ArrayFilter } from  '../../pipes/arrayfilter.pipe';
import { ObjectFilter } from  '../../pipes/objectfilter.pipe';

@Component({
    selector: 'modalcomponent',
    templateUrl: 'app/templates/details.tpl.html',
    directives: [ ...ROUTER_DIRECTIVES],
    providers: [...MODAL_PROVIDERS],
    pipes: [ArrayFilter, ObjectFilter]
})
export class ModalComponentMarkdown{
    private modalSelected: string;
    private selected: string;
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
    };
    
    constructor(private modal:Modal, private elementRef:ElementRef, private ref: ApplicationRef, viewContainer: ViewContainerRef) {
        modal.defaultViewContainer = viewContainer;
    }
    
    closed(){
        this.selected='(closed) '+ this.modalSelected;
    }
    
    dismissed(){
        this.selected='(dismissed)';
    }
    
    open(data:any, detail:any, table:any){
        if (this.data==data){
            this.openModal();
        } else {
            this.table = table;
            this.detail = detail;
            this.description = data.body;
            this.data= data;
            this.header.text = data[detail.header];
            this.header.label = table.find(obj => obj.tag == detail["header-label"]).type;
            this.header.url = data[detail["header-url"]];
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
            .dialogClass('modal-dialog')
            .body(this.body)
            .open();
    }
}