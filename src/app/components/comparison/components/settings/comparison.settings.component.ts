import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'comparison-settings',
    templateUrl: './comparison.settings.template.html',
    styleUrls: ['./comparison.settings.component.css']
})
export class ComparisonSettingsComponent {
    @Input() columnDisplayAll: boolean = false;
    @Input() columnNames: Array<string> = [];
    @Input() columnsEnabled: Array<boolean> = [];

    @Input() elementDisplayAll: boolean = true;
    @Input() elementNames: Array<string> = [];
    @Input() elementsEnabled: Array<boolean> = [];

    @Input() latexDisplayTable: boolean = false;
    @Input() latexEnableTooltips: boolean = false;
    @Input() latexTooltipsAsFootnotes: boolean = false;

    @Input() detailsDisplayTooltips: boolean = false;

    @Output() columnsDisplayAllChange: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() columnChange: EventEmitter<number> = new EventEmitter<number>();

    @Output() elementsDisplayAllChange: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() elementChange: EventEmitter<number> = new EventEmitter<number>();

    @Output() latexDisplayTableChange: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() latexEnableTooltipsChange: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() latexTooltipsAsFootnotesChange: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() latexDownload: EventEmitter<any> = new EventEmitter();

    @Output() detailsDisplayTooltipsChange: EventEmitter<boolean> = new EventEmitter<boolean>();
}
