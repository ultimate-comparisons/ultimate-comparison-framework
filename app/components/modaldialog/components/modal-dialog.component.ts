import { Component, ViewChild, ElementRef} from '@angular/core';
import { PolymerElement } from '@vaadin/angular2-polymer';

import { PaperDialogDirective } from '../directives/paper-dialog.directive';
    
@Component({
    selector: 'modal-dialog',
    templateUrl: '../templates/modal-dialog.template.html',
    directives: [
        PolymerElement('paper-dialog'),
        PaperDialogDirective
    ],
    styleUrls: ['../styles/style.css'],
    moduleId: module.id
})
export class ModalDialogComponent {   
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