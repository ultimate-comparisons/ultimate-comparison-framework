import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'myapp',
    template: '<router-outlet></router-outlet>',
    styleUrls: [
        './styles/bootstrap.min.css',
        './styles/style.css'
    ],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
}
