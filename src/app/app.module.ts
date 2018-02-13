import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ComparisonModule } from './components/comparison/comparison.module';
import { StoreModule } from '@ngrx/store';
import { masterReducer } from './redux/uc.reducers';
import { RouterModule } from '@angular/router';
import { ComparisonComponent } from './components/comparison/comparison.component';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { APP_BASE_HREF } from '@angular/common';
import { CustomRouterStateSerializer } from './redux/custom-router-state-serializer';

@NgModule({
    imports: [
        BrowserModule,
        ComparisonModule,
        StoreModule.forRoot({
            state: masterReducer
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
