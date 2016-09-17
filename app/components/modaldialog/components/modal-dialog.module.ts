import { NgModule }                 from '@angular/core';
import { PolymerElement }           from '@vaadin/angular2-polymer';

import { ModalDialogComponent }     from './modal-dialog.component';
import { PaperDialogDirective }     from '../directives/paper-dialog.directive';

@NgModule({
    imports: [],
    exports: [
        ModalDialogComponent  
    ],
    declarations: [
        ModalDialogComponent,
        PolymerElement('paper-dialog'),
        PolymerElement('paper-button'),
        PaperDialogDirective
    ],
    providers: []
})
export class ModalDialogModule { }