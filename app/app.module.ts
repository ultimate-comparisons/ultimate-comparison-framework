import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ComparisonModule } from './components/comparison/index';
import { LocalStorageModule } from 'angular-2-local-storage';
import { StoreModule } from '@ngrx/store';
import { filterReducer, modalReducer } from './redux/app.reducers';

@NgModule({
    imports: [
        BrowserModule,
        ComparisonModule,
        LocalStorageModule.withConfig({
            prefix: 'ultimate-comparison-base',
            storageType: 'localStorage'
        }),
        StoreModule.forRoot({
            currentFilter: filterReducer,
            currentModal: modalReducer
        })
    ],
    declarations: [
        AppComponent,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
