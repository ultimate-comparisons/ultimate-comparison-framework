import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Citation } from "../../comparison/components/configuration/configuration";

@Component({
    selector: 'referencestable',
    templateUrl: './references-table.component.html',
    styleUrls: ['./references-table.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReferencesTableComponent implements OnChanges {
    @Input() changeNum: number = 0;
    @Input() citationMap: Map<string, Citation> = new Map;

    @Input() citations: Array<Citation> = [];

    ngOnChanges(changes: SimpleChanges): void {
        let citations: Array<Citation> = [];
        this.citationMap.forEach((citation) => citations.push(citation));

        citations.sort((a, b) => a.index - b.index);
        this.citations = citations;
    }
}