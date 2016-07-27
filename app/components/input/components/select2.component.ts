import {Component, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import * as jQuery from 'jquery';
import 'select2';

@Component({
    selector: 'select2',
    templateUrl: '../templates/select2.template.html',
    moduleId: module.id
})
export class Select2Component implements AfterViewInit {
    @Input() items: Array<string> = new Array<string>();
    @Input() maximumSelectionLength: number = 0;
    @Input() placeholder: string;
    
    @Output() result: EventEmitter<any> = new EventEmitter();
    
    @ViewChild('select2') el:ElementRef;
    
    private value: Array<string>;
    
    ngAfterViewInit(){
        jQuery(this.el.nativeElement).select2({
            placeholder: this.placeholder,
            allowClear: true,
            tags: true    
        });
        jQuery(this.el.nativeElement).on(
          'change',
          (e) => (this.value = jQuery(e.target).val() ? jQuery(e.target).val() : [], this.result.emit(this.value)) 
        )
    }
}