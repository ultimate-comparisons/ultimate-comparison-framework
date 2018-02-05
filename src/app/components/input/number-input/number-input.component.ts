import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ComparisonComponent } from "../../comparison/components/component/comparison.component";
import { InputInterface } from "../input-interface";
import { isNullOrUndefined } from "util";
import { Criteria } from "../../comparison/components/configuration/configuration";

@Component({
    templateUrl: './number-input.template.html',
    selector: 'number-input',
    styleUrls: ['./number-input.component.css']
})
export class NumberInputComponent implements InputInterface {
    public static components: Array<NumberInputComponent> = [];
    @Input() comparisonComponent: ComparisonComponent;
    @Input() criteria: Criteria;
    @Input() tag: string;
    @Input() name: string;
    @Input() active: Array<string> = [];
    @ViewChild('content') content: ElementRef;
    @Output() result: EventEmitter<Array<string>> = new EventEmitter<Array<string>>();

    public constructor() {
        NumberInputComponent.components.push(this);
    }

    public criteriaChanged(value: Array<String> | KeyboardEvent | { target: { value: string } }) {
        this.result.emit([this.content.nativeElement.value]);
    }

    public addToGui(item: string): void {
        if (isNullOrUndefined(this.content)) {
            return;
        }

        // regex for finding out if the item is already in the list.
        // tests "^ *item *$", "^ *item *,", ", *item *$", and ", *item *,"
        // these represent following patterns:
        // 1. arbitrary number of spaces, item, arbitrary number of spaces, complete field
        // 2. arbitrary number of spaces, item, arbitrary number of spaces, comma, start of field
        // 3. comma, arbitrary number of spaces, item, arbitrary number of spaces, end of field
        // 4. comma, arbitrary number of spaces, item, arbitrary number of spaces, comma, in the middle of the field
        // The commas are needed to make sure that it matches the complete number instead of partly, because else
        // "13" would match the pattern "3$".
        const regex = '(^ *' + item + ' *$|^ *' + item + ' *,|, *' + item + ' *,|, *' + item + ' *$)';
        if (new RegExp(regex).test(this.content.nativeElement.value)) {
            return;
        }

        if (this.content.nativeElement.value !== '') {
            item = ', ' + item;
        }
        this.content.nativeElement.value += item;
        this.criteriaChanged({target: {value: this.content.nativeElement.value}});
    }

    public getValue() {
        if (this.active.length > 0) {
            return this.active[0];
        }
        return '';
    }
}
