import { AfterViewChecked, ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import * as AnchorJS from 'anchor-js';
import { CriteriaData, Label } from '../../../../../lib/gulp/model/model.module';

@Component({
    selector: 'generictable',
    templateUrl: './generic-table.component.html',
    styleUrls: ['./generic-table.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenericTableComponent implements AfterViewChecked, OnChanges {
    @Input() changeNum = 0;

    @Output() settingsCallback: EventEmitter<any> = new EventEmitter();
    @Output() showDetails: EventEmitter<any> = new EventEmitter();
    @Output() searchFor: EventEmitter<any> = new EventEmitter();
    @Output() orderChange: EventEmitter<any> = new EventEmitter();

    @Input() columns: Array<string> = [];
    @Input() types: Array<string> = [];
    @Input() items: Array<Array<CriteriaData>> = [];
    @Input() index: Array<number> = [];
    @Input() order: Array<number> = [];

    private table;
    private anchor;

    public labelClick(event: MouseEvent, key: Label, index: number) {
        this.searchFor.emit({event, key, index});
    }

    public orderClick(e: MouseEvent, value: number) {
        this.orderChange.emit({index: value, ctrl: e.ctrlKey});
    }

    ngAfterViewChecked(): void {
        this.anchor = new AnchorJS({placement: 'right'}).add('.anchored');
    }

    ngOnChanges(changes): void {
        this.update();
    }

    public update(): void {
        if (this.table != null) {
            this.table.trigger('reflow');
        }
    }
}
