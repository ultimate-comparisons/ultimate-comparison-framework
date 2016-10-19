import { NgModule, CUSTOM_ELEMENTS_SCHEMA }     from '@angular/core';
import { BrowserModule }                        from '@angular/platform-browser';
import { SelectModule }                         from 'angular2-select';

import { Select2Component }                     from './components/select2.component';
import { SelectComponent }                      from './components/select.component';
import { PaperChechboxDirective }               from './directives/paper-checkbox.directive';

@NgModule({
    imports: [ 
        BrowserModule,
        SelectModule
    ],
    exports: [
        SelectComponent,
        Select2Component,
        PaperChechboxDirective
    ],
    declarations: [
        SelectComponent,
        Select2Component,
        PaperChechboxDirective
    ],
    providers: [],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class InputModule { }