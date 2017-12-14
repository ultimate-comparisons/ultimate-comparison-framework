import { ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Data, Label, Markdown, Text, Url } from "../../comparison/components/data/data";
import { Configuration, Criteria } from "../../comparison/components/configuration/configuration";

@Component({
    selector: 'latextable',
    templateUrl: './latex-table.component.html',
    styleUrls: ['./latex-table.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LatexTableComponent implements OnChanges {

    @Input() changeNum;
    @Input() showTableTooltips = true;
    @Input() tableTooltipsAsFootnotes = true;

    @Input() data: Array<Data> = [];
    @Input() configuration: Configuration = new Configuration.Builder().build();

    // TODO new inputs: (move to redux store)
    @Input() columns: Array<string> = [];
    @Input() types: Array<number> = [];
    @Input() items: Array<Array<String | Array<Label> | Text | Url | Markdown | number>> = [];
    @Input() index: Array<number> = [];

    public footnotes: Map<string, { ref: string, count: number }> = new Map();

    constructor(public element: ElementRef) {

    }

    ngOnChanges(changes: SimpleChanges): void {
        let columns: Array<string> = [];
        let types: Array<number> = [];
        let items: Array<Array<Array<Label> | Text | Url | Markdown | number>> = [];
        let index: Array<number> = [];
        const criteriaMap: Map<string, Criteria> = this.configuration.criteria;
        criteriaMap.forEach((criteria) => {
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

    public getFootnotes() {
        let footnoteItems: Array<{ ref: string, count: number, text: string }> = [];
        this.footnotes.forEach((value, key) => {
            footnoteItems.push({ref: value.ref, count: value.count, text: key})
        });
        return footnoteItems;
    }
}