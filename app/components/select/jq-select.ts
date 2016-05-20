import {Component, EventEmitter, AfterViewInit} from '@angular/core';
import {SELECT_DIRECTIVES}  from 'ng2-select/ng2-select';

declare var jQuery:JQueryStatic;

@Component({
selector: 'JQSelect',
inputs: ['items', 'option', 'placeholder', 'id', 'maximumSelectionLength'],
outputs:['result'],
templateUrl: 'app/templates/select.tpl.html',
directives: [SELECT_DIRECTIVES]
})
export class JQSelect implements AfterViewInit {
    private items: Array<string> = [];
    private result: EventEmitter<any> = new EventEmitter();
    private value: Array<string>;
    private id: string;
    private placeholder: string;
    private maximumSelectionLength: number = 0;
    
    private selectedFunction (){
        this.result.emit(this.value);
        //console.log(this.value)
    }
    
    private mapme(value:any) {
        return value.map(function(val){
            let retVal = {
                id: value.indexOf(val),
                text: val.name
            };
            return retVal;
        });
    }
    ngAfterViewInit(){
        jQuery('#'+this.id).select2({
            placeholder: this.placeholder,
            allowClear: true,
            tags: true,
            maximumSelectionLength: this.maximumSelectionLength
        });
        jQuery('#'+this.id).on(
          'change',
          (e) => (this.value = jQuery(e.target).val() ? jQuery(e.target).val():[], this.result.emit(this.value)) 
        )
    }
    
    // ng2-select listeners
    private ngselected(value:any) {
        this.value = value.text;
        this.result.emit(this.value);
    }
    
    private dummy() {
        //console.log("dummy");
    }
}