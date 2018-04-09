import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'myapp',
    template: '<router-outlet></router-outlet>',
    encapsulation: ViewEncapsulation.None,
    host: {
        '(window:popstate)': 'popState($event)'
    }
})
export class AppComponent {
    popState(ev: any) {
        console.log(ev);
    }
}
