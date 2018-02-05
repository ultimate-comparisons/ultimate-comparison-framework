import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'myapp',
    template: '<router-outlet></router-outlet>',
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
}
