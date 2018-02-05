import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'ptooltip',
    templateUrl: './tooltip.component.html',
    styleUrls: ['./tooltip.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipComponent {
    @Input() tooltip = '';
    @Input() tooltipHtml = '';
    @HostBinding('class') positionClass = 'n';

    constructor(private _sanitizer: DomSanitizer) {
    }

    @Input() set position(p: string) {
        this.positionClass = p;
    }
}

