import { NgModule, CUSTOM_ELEMENTS_SCHEMA }         from '@angular/core';
import { BrowserModule }                            from '@angular/platform-browser';

import { AppComponent }                             from './app.component';
import { ComparisonModule, ComparisonComponent }    from './components/comparison/index';

@NgModule({
    imports: [ 
        BrowserModule,
        ComparisonModule
    ],
    declarations: [ 
        AppComponent,
    ],
    providers: [],
    bootstrap: [ AppComponent ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }