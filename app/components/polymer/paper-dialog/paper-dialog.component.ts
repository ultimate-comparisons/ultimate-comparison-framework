import { Component, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { IUCAppState } from '../../../redux/app.app-state';
import { Store } from '@ngrx/store';
import { UPDATE_MODAL } from '../../../redux/app.reducers';

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

    constructor(public el: ElementRef, public renderer: Renderer2, private store: Store<IUCAppState>) {
    }

    public open() {
        this.store.dispatch({type: UPDATE_MODAL, value: this});
        this.opened = true;
    }

    public close() {
        this.store.dispatch({type: UPDATE_MODAL, value: null});
        this.opened = false;
    }

    @HostListener('window:keydown', ['$event']) onKeydown(event) {
        if (this.opened && event.key.toLowerCase() === 'escape') {
            this.close();
        }
    }
}
