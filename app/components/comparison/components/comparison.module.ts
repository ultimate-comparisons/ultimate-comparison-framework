import { NgModule }                                     from '@angular/core';
import { BrowserModule }                                from '@angular/platform-browser';
import { HttpModule }                                   from '@angular/http';

import { ComparisonDetailsComponent }                   from './comparison-details.component';
import { ComparisonFootnoteComponent }                  from './comparison-footnote.component';
import { ComparisonComponent }                          from './comparison.component';
import { PipesModule }                                  from '../../pipes/pipes.module';
import { InputModule }                                  from '../../input/input.module';
import { OutputModule }                                 from '../../output/output.module';

// "Polymer" Module (Polymer to Angular2 Conversion Components)
//import { PolymerModule }                                from '../../polymer/polymer.module';

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
        OutputModule,
        PipesModule
    ],
    exports: [
        ComparisonComponent  
    ],
    declarations: [
        ComparisonComponent,
        ComparisonDetailsComponent,
        ComparisonFootnoteComponent
    ],
    providers: [
        ComparisonService,
        ComparisonDataService,
        ComparisonConfigService,
        ComparisonCitationService,
        Title
    ]
})
export class ComparisonModule { }