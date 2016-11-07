import { Component, Input, ChangeDetectionStrategy} from '@angular/core';

@Component({
    selector: 'pitem',
    templateUrl: './paper-item.component.html',
    styleUrls: ['./paper-item.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    moduleId: module.id
})
export class PaperItemComponent {}