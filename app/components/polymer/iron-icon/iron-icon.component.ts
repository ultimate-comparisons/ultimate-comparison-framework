import { Component, Input, ChangeDetectionStrategy} from '@angular/core';

@Component({
    selector: 'iicon',
    templateUrl: './iron-icon.component.html',
    styleUrls: ['./iron-icon.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    moduleId: module.id
})
export class IronIconComponent {   
    @Input() icon: string;
}