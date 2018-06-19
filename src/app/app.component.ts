import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { ComparisonComponent } from './components/comparison/comparison.component';

@Component({
    selector: 'myapp',
    template: '<router-outlet></router-outlet>',
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @HostListener('window:popstate', ['$event'])
    popState(ev: PopStateEvent) {
        ComparisonComponent.instance.dispatchNewState(ev.state);
    }
}
