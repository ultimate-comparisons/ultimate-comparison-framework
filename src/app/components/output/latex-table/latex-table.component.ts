import { ChangeDetectionStrategy, Component, ElementRef, Input } from '@angular/core';
import { Label, Markdown, Text, Url } from "../../comparison/data/data";
import { CriteriaType } from "../../comparison/configuration/configuration";

@Component({
    selector: 'latextable',
    templateUrl: './latex-table.component.html',
    styleUrls: ['./latex-table.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LatexTableComponent {
    @Input() changeNum;
    @Input() showTableTooltips = true;
    @Input() tableTooltipsAsFootnotes = true;

    @Input() columns: Array<string> = [];
    @Input() types: Array<CriteriaType> = [];
    @Input() items: Array<Array<String | Array<Label> | Text | Url | Markdown | number>> = [];
    @Input() index: Array<number> = [];

    public footnotes: Map<string, { ref: string, count: number }> = new Map();

    constructor(public element: ElementRef) {

    }

    public getFootnotes() {
        let footnoteItems: Array<{ ref: string, count: number, text: string }> = [];
        this.footnotes.forEach((value, key) => {
            footnoteItems.push({ref: value.ref, count: value.count, text: key})
        });
        return footnoteItems;
    }
}
