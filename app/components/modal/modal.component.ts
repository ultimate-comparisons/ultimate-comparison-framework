import { Component, ViewChild, ElementRef} from '@angular/core';
import { PolymerElement } from '@vaadin/angular2-polymer';

import { PaperDialogDirective } from './dialog.component';
    
@Component({
    selector: 'modaldialog',
    template: `
    <div class="modal-container" #container>
        <paper-dialog (openedChange)="toggleOpen($event)" role="dialog" #dialogPaper>
            <ng-content></ng-content>
            <div class="buttons">
            <paper-button dialog-confirm raised (click)="close()">Close</paper-button>
        </div>
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
            document.body.classList.remove('modal-open');
        }
    }
    
    @ViewChild('dialogPaper') dia: ElementRef;
    public open(){
        document.body.classList.add('modal-open');
        this.container.nativeElement.classList.add('mc-opened');
        if(this.dia && this.dia.nativeElement.open)
            this.dia.nativeElement.open();
    }
    public close(){
        document.body.classList.remove('modal-open');
        this.container.nativeElement.classList.remove('mc-opened');
        if(this.dia && this.dia.nativeElement.close)
            this.dia.nativeElement.close();
    }
}