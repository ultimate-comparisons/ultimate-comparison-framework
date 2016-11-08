import { NgModule }                                     from '@angular/core';
import { BrowserModule }                                from '@angular/platform-browser';
import { HttpModule }                                   from '@angular/http';

import { ComparisonDetailsComponent }                   from './comparison-details.component';
import { ComparisonFootnoteComponent }                  from './comparison-footnote.component';
import { ComparisonComponent }                          from './comparison.component';
import { COMPARISON_PIPES }                             from '../pipes/index.pipes';
import { InputModule }                                  from '../../input/input.module';

// "Polymer" Module (Polymer to Angular2 Conversion Components)
import { PolymerModule }                                from '../../polymer/polymer.module';

// Provider imports
import { Title }                                        from '@angular/platform-browser';
import { ComparisonService }                            from './comparison.service'; 
import { ComparisonDataService }                        from './comparison-data.service'; 
import { ComparisonConfigService }                      from './comparison-config.service'; 
import { ComparisonCitationService }                    from './comparison-citation.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        InputModule,
        PolymerModule
    ],
    exports: [
        ComparisonComponent  
    ],
    declarations: [
        ComparisonComponent,
        ComparisonDetailsComponent,
        ComparisonFootnoteComponent,
        ...COMPARISON_PIPES
    ],
    providers: [
        ComparisonService,
        ComparisonDataService,
        ComparisonConfigService,
        ComparisonCitationService,
        ...COMPARISON_PIPES,
        Title
    ]
})
export class ComparisonModule { }