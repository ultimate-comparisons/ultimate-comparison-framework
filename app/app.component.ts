import { Component } from '@angular/core';
import { COMPARISON_DIRECTIVES, COMPARISON_PROVIDERS } from './components/comparison/index';

@Component({
    selector: 'myapp',
    template: '<comparison></comparison>',
    directives: [COMPARISON_DIRECTIVES],
    providers: [COMPARISON_PROVIDERS]
})
export class AppComponent { }
    
