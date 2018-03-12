import {
    AfterViewChecked,
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    Output
} from '@angular/core';
import { Label, Markdown, Text, Url } from "../../comparison/data/data";

declare const anchors;

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
    @Input() items: Array<Array<String | Array<Label> | Text | Url | Markdown | number>> = [];
    @Input() index: Array<number> = [];
    @Input() order: Array<number> = [];

    private table;

    public labelClick(event: MouseEvent, key: Label, index: number) {
        this.searchFor.emit({event, key, index});
    }

    public orderClick(e: MouseEvent, value: number) {
        this.orderChange.emit({index: value, ctrl: e.ctrlKey});
    }

    ngAfterViewChecked(): void {
        this.table = (<any>$('table.table-hover'));
        this.table.floatThead();
        anchors.options = {
            placement: 'right'
        };
        anchors.add('.anchored');
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
