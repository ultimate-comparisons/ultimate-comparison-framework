import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input,
    Output,
    ViewChild
} from '@angular/core';
import { isNullOrUndefined } from "util";
import { InputInterface } from "../input-interface";

@Component({
    selector: 'select2',
    templateUrl: 'select2.template.html',
    styleUrls: [
        'select2.component.css'
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Select2Component implements InputInterface {
    public static components: Array<Select2Component> = [];
    @Input() options: Array<Object> = [];
    @Input() maximumSelectionLength = 0;
    @Input() placeholder: string;
    @Input() tag: string;
    @Input() name: string;
    @Input() active: Array<{ id: string, text: string }>;
    @Input() change: number;

    @ViewChild('selector') ngSelect: any;
    @Output() result: EventEmitter<any> = new EventEmitter();

    public constructor(private cd: ChangeDetectorRef) {
        Select2Component.components.push(this);
    }

    public select(item) {
        this.result.emit(item.text);
    }

    public deSelect(item) {
        this.result.emit(item.text);
    }

    public addToGui(item: string) {
        if (isNullOrUndefined(this.ngSelect.active)) {
            this.ngSelect.active = [];
        }
        let value;
        for (const elem of this.ngSelect.itemObjects) {
            if (elem.text === item) {
                value = elem;
                break;
            }
        }

        // JS (and thus TS) has no contains method for arrays.
        // A workaround is checking if the index of an element is -1 (indicating not present)
        if (this.ngSelect.active.indexOf(value) !== -1) {
            return;
        }
        this.ngSelect.active.push(value);
        this.cd.markForCheck();
    }
}
