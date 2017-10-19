import { Component, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Component({
    selector: 'pdialog',
    templateUrl: './paper-dialog.component.html',
    styleUrls: ['./paper-dialog.component.css']
})
export class PaperDialogComponent {
    public opened = false;
    @Input() heading: string;

    @HostListener('click', ['$event.target']) onClick(target) {
        if (target.localName === 'pdialog') {
            this.close();
        }
    }

    constructor(private el: ElementRef, private renderer: Renderer2) {
    }

    public open() {
        this.renderer.setStyle(this.el.nativeElement, 'display', 'grid');
        document.body.classList.add('modal-open');
        this.opened = true;
    }

    public close() {
        this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
        document.body.classList.remove('modal-open');
        this.opened = false;
    }

    @HostListener('window:keydown', ['$event']) onKeydown(event) {
        if (this.opened && event.key.toLowerCase() === 'escape') {
            this.close();
        }
    }
}
