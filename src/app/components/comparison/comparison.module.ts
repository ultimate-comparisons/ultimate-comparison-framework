import { NgModule } from '@angular/core';
// Provider imports
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComparisonDetailsComponent } from './details/comparison.details.component';
import { ComparisonComponent } from './comparison.component';
import { PipesModule } from '../pipes/pipes.module';
import { InputModule } from '../input/input.module';
import { OutputModule } from '../output/output.module';
import { ConfigurationService } from './configuration/configuration.service';
import { ComparisonSettingsComponent } from './settings/comparison.settings.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
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
        ComparisonSettingsComponent
    ],
    providers: [
        ConfigurationService,
        Title,
        HttpClient
    ]
})
export class ComparisonModule {
}
