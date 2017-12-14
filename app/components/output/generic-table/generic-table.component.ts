import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    SimpleChanges
} from '@angular/core';
import { Configuration, Criteria } from "../../comparison/components/configuration/configuration";
import { Data, Label, Markdown, Text, Url } from "../../comparison/components/data/data";

@Component({
    selector: 'generictable',
    templateUrl: './generic-table.component.html',
    styleUrls: ['./generic-table.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenericTableComponent implements OnChanges {
    @Input() changeNum = 0;

    @Input() data: Array<Data> = [];
    @Input() configuration: Configuration = new Configuration.Builder().build();

    @Input() order: Array<String> = [];
    @Input() orderOption: Array<number> = [];

    @Output() settingsCallback: EventEmitter<any> = new EventEmitter();
    @Output() showDetails: EventEmitter<any> = new EventEmitter();
    @Output() searchFor: EventEmitter<any> = new EventEmitter();
    @Output() orderChange: EventEmitter<any> = new EventEmitter();
    @Output() orderOptionChange: EventEmitter<any> = new EventEmitter();

    // TODO new inputs: (move to redux store)
    @Input() columns: Array<string> = [];
    @Input() types: Array<number> = [];
    @Input() items: Array<Array<String | Array<Label> | Text | Url | Markdown | number>> = [];
    @Input() index: Array<number> = [];

    private ctrlCounter = 0;

    // TODO Remove => move to redux
    ngOnChanges(changes: SimpleChanges): void {
        let columns: Array<string> = [];
        let types: Array<number> = [];
        let items: Array<Array<Array<Label> | Text | Url | Markdown | number>> = [];
        let index: Array<number> = [];
        const criteriaMap: Map<string, Criteria> = this.configuration.criteria;
        criteriaMap.forEach((criteria, key) => {
            if (criteria.table) {
                columns.push(criteria.name);
                types.push(criteria.type);
            }

        });
        this.data.forEach((data, i) => {
            let item: Array<Array<Label> | Text | Url | Markdown | number> = [];
            criteriaMap.forEach((criteria, key) => {
                if (criteria.table) {
                    const obj: any = data.criteria.get(key);
                    if (criteria.type === 1) {
                        const labelMap: Map<string, Label> = obj || new Map;
                        let labels: Array<Label> = [];
                        labelMap.forEach(label => labels.push(label));
                        item.push(labels);
                    } else if (criteria.type === 4) {
                        item.push(data.averageRating);
                    } else {
                        item.push(obj);
                    }
                }
            });
            items.push(item);
            index.push(i);
        });
        this.columns = columns;
        this.items = items;
        this.types = types;
        this.index = index;
    }

    public labelClick(key: string, index: number) {
        this.searchFor.emit({key, index});
    }

    private orderClick(e: MouseEvent, value: string) {
        const pos: number = this.order.findIndex(name => name === value);
        if (e.ctrlKey) {
            this.ctrlCounter = this.order[this.ctrlCounter] === value ? this.ctrlCounter : this.ctrlCounter + 1;
        } else {
            this.ctrlCounter = 0;
        }
        if (typeof pos !== 'undefined' && pos >= 0) {
            this.order[this.ctrlCounter] = value;
            this.orderOption[this.ctrlCounter] = this.orderOption[pos] === 1 ? -1 : 1;
            this.orderOption[pos] = pos !== this.ctrlCounter ? 0 : this.orderOption[this.ctrlCounter];
        } else {
            this.order[this.ctrlCounter] = value;
            this.orderOption[this.ctrlCounter] = 1;
        }
        if (this.ctrlCounter === 0) {
            for (let i = 1; i < this.orderOption.length; i++) {
                this.orderOption[i] = 0;
            }
        }
        this.orderChange.emit(this.order);
        this.orderOptionChange.emit(this.orderOption);
    }

    private displayOrder(value: string, option: number): boolean {
        if (this.order.length === 0 && this.orderOption.length === 0) {
            this.order[this.ctrlCounter] = 'tag';
            this.orderOption[this.ctrlCounter] = 1;
        }
        return this.order.findIndex(val => val === value) >= 0 && this.orderOption[this.order.findIndex(val => val === value)] === option;
    }
}
