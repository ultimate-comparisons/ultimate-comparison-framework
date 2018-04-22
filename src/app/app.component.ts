import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { ComparisonComponent } from './components/comparison/comparison.component';

@Component({
    selector: 'myapp',
    template: '<router-outlet></router-outlet>',
    encapsulation: ViewEncapsulation.None,
    host: {
        '(window:popstate)': 'popState($event)'
    }
})
export class AppComponent {
    popState(ev: PopStateEvent) {
        ComparisonComponent.instance.dispatchNewState(ev.state);
    }
}
