import { Component, Input, ChangeDetectionStrategy, ElementRef, Renderer, HostListener } from '@angular/core';

@Component({
    selector: 'pdialog',
    templateUrl: './paper-dialog.component.html',
    styleUrls: ['./paper-dialog.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    moduleId: module.id
})
export class PaperDialogComponent {   
    @Input() heading: string;
    @HostListener('click', ['$event.target']) onClick(target) {
        if (target.localName === "pdialog"){
            this.close();
        }
    }
        
    constructor(private el:ElementRef, private renderer: Renderer){}
    
    public open(){
        this.renderer.setElementStyle(this.el.nativeElement, 'display', 'block');
        document.body.classList.add("modal-open");
    }
    
    public close(){
        this.renderer.setElementStyle(this.el.nativeElement, 'display', 'none');
        document.body.classList.remove("modal-open");
    }
}