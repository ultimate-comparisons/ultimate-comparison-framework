import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ComparisonModule } from './components/comparison/index';
import { LocalStorageModule } from 'angular-2-local-storage';
import { StoreModule } from '@ngrx/store';
import { searchReducer, modalReducer, filterReducer, routeReducer } from './redux/app.reducers';
import { RouterModule } from '@angular/router';
import { ComparisonComponent } from './components/comparison/components/comparison.component';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { APP_BASE_HREF } from '@angular/common';
import { CustomRouterStateSerializer } from './redux/app.state-serializer';

@NgModule({
    imports: [
        BrowserModule,
        ComparisonModule,
        LocalStorageModule.withConfig({
            prefix: 'ultimate-comparison-base',
            storageType: 'localStorage'
        }),
        StoreModule.forRoot({
            currentSearch: searchReducer,
            currentModal: modalReducer,
            currentFilter: filterReducer,
            routerUpdate: routeReducer
        }),
        RouterModule.forRoot([{
            path: '', component: ComparisonComponent
        }], {useHash: false}),
        StoreRouterConnectingModule
    ],
    declarations: [
        AppComponent,
    ],
    providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        {provide: RouterStateSerializer, useClass: CustomRouterStateSerializer}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
