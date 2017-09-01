import { Component, Input, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { ComparisonComponent } from "../../comparison/components/comparison.component";

@Component({
    selector: 'pcard',
    templateUrl: './paper-card.component.html',
    styleUrls: ['./paper-card.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaperCardComponent {
    @Input() heading: string;
    @Input() symbol = false;
    public shrinkExpandEmitter = new EventEmitter();
    public shrinked = false;
    @Input() comparisonComponent: ComparisonComponent = null;

    public shrinkExpand() {
        this.shrinkExpandEmitter.emit();
    }
}
