import { Component, Input, ViewChild } from '@angular/core';
import { ComparisonComponent } from "../../comparison/components/comparison.component";
import { Criteria } from "../../comparison/shared/components/criteria";
import { InputInterface } from "../input-interface";
import { isNullOrUndefined } from "util";

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
    @ViewChild('content') content: any;

    public constructor() {
        NumberInputComponent.components.push(this);
    }

    public criteriaChanged(value: Array<String> | KeyboardEvent | { target: { value: string }}) {
        this.comparisonComponent.criteriaChanged(value, this.criteria);
    }

    public addToGui(item: string): void {
        if (isNullOrUndefined(this.content)) {
            return;
        }
        if (this.content.nativeElement.value !== '') {
            item = ', ' + item;
        }
        this.content.nativeElement.value += item;
        this.criteriaChanged({ target: { value: this.content.nativeElement.value }});
    }
}
