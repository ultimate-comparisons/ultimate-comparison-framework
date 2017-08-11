import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'select2',
    templateUrl: 'select2.template.html',
    styleUrls: [
        'select2.component.css'
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Select2Component {
    private ops = [{value: 't1', label: 't2'}];
    @Input() options: Array<Object> = [];
    @Input() maximumSelectionLength = 0;
    @Input() placeholder: string;

    @Output() result: EventEmitter<any> = new EventEmitter();

    private value: Array<string> = [];

    public select(item) {
        this.value.push(item.value);
        this.result.emit(this.value);
    }

    public deSelect(item) {
        const index = this.value.indexOf(item.value);
        if (index >= -1) {
            this.value.splice(index, 1);
        }
        this.result.emit(this.value);
    }
}
