import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'pcard',
    templateUrl: './paper-card.component.html',
    styleUrls: ['./paper-card.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaperCardComponent {
    @Input() heading: string;
    @Input() symbol = false;
    @Input() expand = false;
    @Output() expandChange: EventEmitter<any> = new EventEmitter();
}
