import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'iicon',
    templateUrl: './iron-icon.component.html',
    styleUrls: ['./iron-icon.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class IronIconComponent {
    @Input() icon: string;
    private changed = 0;

    public setIcon(icon: string) {
        this.icon = icon;
        this.change();
    }

    public change() {
        if (this.changed === 0) {
            this.changed = 1;
        } else {
            this.changed = 0;
        }
    }
}