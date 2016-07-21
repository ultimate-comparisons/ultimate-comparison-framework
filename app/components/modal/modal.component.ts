import { Component, ViewChild, ElementRef} from '@angular/core';
import { PolymerElement } from '@vaadin/angular2-polymer';

import { PaperDialogDirective } from './dialog.component';
    
@Component({
    selector: 'modaldialog',
    template: `
    <div class="modal-container" #container>
        <paper-dialog (openedChange)="toggleOpen($event)" role="dialog" #dialog>
            <ng-content></ng-content>
        </paper-dialog>
    </div>
    `,
    directives: [
        PolymerElement('paper-dialog'),
        PaperDialogDirective
    ],
    styleUrls: ['./style.css'],
    moduleId: module.id
})
export class ModalDialog {
    
    constructor() {}
    
    @ViewChild('container') container: ElementRef;
    private toggleOpen(opened:boolean){
        if(opened){
            this.container.nativeElement.classList.add('mc-opened');
        } else {
            this.container.nativeElement.classList.remove('mc-opened');
        }
    }
    
    @ViewChild('dialog') dia: ElementRef;
    public open(){
        this.dia.nativeElement.open();
    }
    public close(){
        this.dia.nativeElement.close();
    }
}