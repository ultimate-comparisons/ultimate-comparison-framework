import {Component, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
    selector: 'select-default',
    templateUrl: '../templates/select.template.html',
    moduleId: module.id
})
export class SelectComponent {
    @Input() items: Array<any> = new Array<any>();    
    @Input() selected: any = "";
    @Output() result: EventEmitter<any> = new EventEmitter();

    select(value){
        this.result.emit(value);
        this.selected = value;
    }
}