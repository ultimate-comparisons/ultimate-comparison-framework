import {Component} from '@angular/core';
import {DataFormComponent} from './components/data-form/data-form.component';

@Component({
    selector: 'my-app',
    template: '<data-form></data-form>',
    directives: [DataFormComponent]
})
export class AppComponent { }
    
