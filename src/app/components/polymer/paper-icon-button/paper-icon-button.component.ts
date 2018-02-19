import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'picon-button',
    templateUrl: './paper-icon-button.component.html',
    styleUrls: ['./paper-icon-button.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaperIconButtonComponent {
    @Input() icon: string;
    @Input() title: string;
    @Input() showTooltip: boolean = true;
}
