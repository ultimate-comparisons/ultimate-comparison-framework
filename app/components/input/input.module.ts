import { NgModule, CUSTOM_ELEMENTS_SCHEMA }     from '@angular/core';
import { BrowserModule }                        from '@angular/platform-browser';
import { SelectModule }                         from 'angular2-select';

import { Select2Component }                     from './components/select2.component';

@NgModule({
    imports: [ 
        BrowserModule,
        SelectModule
    ],
    exports: [
        Select2Component
    ],
    declarations: [
        Select2Component
    ],
    providers: [],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class InputModule { }