import {
    AfterViewChecked,
    ApplicationRef,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    Output
} from '@angular/core';
import { CriteriaSelection, Data, TableData } from './../../comparison/shared/index';
import { ComparisonCitationService } from './../../comparison/components/comparison-citation.service';
import { ComparisonConfigService } from '../../comparison/components/comparison-config.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Http } from '@angular/http';

declare const anchors;

@Component({
    selector: 'generictable',
    templateUrl: './generic-table.component.html',
    styleUrls: ['./generic-table.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenericTableComponent implements AfterViewChecked, OnChanges {
    private counter = 0;
    private table;

    @Input() display = false;
    @Input() settings = false;
    @Input() columns: Array<TableData> = [];

    @Input() data: Array<Data> = [];
    @Input() query: { [name: string]: CriteriaSelection; } = {};
    @Input() displayTemplate = false;

    @Input() citationServ: ComparisonCitationService;

    @Output() settingsCallback: EventEmitter<any> = new EventEmitter();
    @Output() showDetails: EventEmitter<any> = new EventEmitter();

    @Input() changeNum = 0;

    @Input() order: Array<String> = [];
    @Output() orderChange: EventEmitter<any> = new EventEmitter();
    @Input() orderOption: Array<number> = [];
    @Output() orderOptionChange: EventEmitter<any> = new EventEmitter();

    private ctrlCounter = 0;

    constructor(private ar: ApplicationRef,
                private confServ: ComparisonConfigService,
                private sanitization: DomSanitizer,
                private http: Http,
                private cd: ChangeDetectorRef) {
    }

    private orderClick(e: MouseEvent, value: string) {
        const pos: number = this.order.findIndex(name => name === value);
        if (e.ctrlKey) {
            this.ctrlCounter = this.order[this.ctrlCounter] === value ? this.ctrlCounter : this.ctrlCounter + 1;
        } else {
            this.ctrlCounter = 0;
        }
        if (typeof pos !== 'undefined' && pos >= 0) {
            this.order[this.ctrlCounter] = value;
            this.orderOption[this.ctrlCounter] = this.orderOption[pos] === 1 ? -1 : 1;
            this.orderOption[pos] = pos !== this.ctrlCounter ? 0 : this.orderOption[this.ctrlCounter];
        } else {
            this.order[this.ctrlCounter] = value;
            this.orderOption[this.ctrlCounter] = 1;
        }
        if (this.ctrlCounter === 0) {
            for (let i = 1; i < this.orderOption.length; i++) {
                this.orderOption[i] = 0;
            }
        }
        this.orderChange.emit(this.order);
        this.orderOptionChange.emit(this.orderOption);
        this.table.trigger('reflow');
    }

    private displayOrder(value: string, option: number): boolean {
        if (this.order.length === 0 && this.orderOption.length === 0) {
            this.order[this.ctrlCounter] = 'tag';
            this.orderOption[this.ctrlCounter] = 1;
        }
        return this.order.findIndex(val => val === value) >= 0 && this.orderOption[this.order.findIndex(val => val === value)] === option;
    }

    ngAfterViewChecked(): void {
        this.table = (<any>$('table.table.table-hover'));
        this.table.floatThead();
        anchors.options = {
            placement: 'right'
        };
        anchors.add('.anchored');
    }

    ngOnChanges(): void {
        this.update();
    }

    public update(): void {
        if (this.table != null) {
            this.table.trigger('reflow');
        }
    }

    public shouldBeShown(data: Data) {
        if (this.confServ.comparison && this.confServ.comparison.displayall) {
            return true;
        }
        let val = true;
        for (const column of this.confServ.tableDataSet.getTableDataArray()) {
            if (column.display && data.properties[column.tag] != null && data.properties[column.tag].plain !== '') {
                return true;
            }
            if (column.display && data.properties[column.tag] != null) {
                val = false;
            }
        }
        return val;
    }

    public getColor(column: TableData, label: string): SafeHtml {
        return this.sanitization.bypassSecurityTrustStyle(column.type.colors.getColor(label));
    }

    public getForegroundColor(color: any): SafeHtml {
        const h = Number.parseInt(color['changingThisBreaksApplicationSecurity'].substr(4, 3).split(',')[0]);
        const s = 1;
        const l = 0.7;
        const rgb = this.hslToRgb(h, s, l);
        const yiq = ((rgb[0] * 299) + (rgb[1] * 587) + (rgb[2] * 114)) / 1000;
        return this.sanitization.bypassSecurityTrustStyle((yiq >= 128) ? '#f0f0f0' : '#0d0d0d');
    }

    private hslToRgb(h, s, l) {
        const c = (1 - Math.abs(2 * l - 1)) * s;
        const x = c * (1 - Math.abs((h / 60) % 2 - 1));
        const m = l - c / 2;

        let r, g, b;
        if (0 <= h && h < 60) {
            r = c;
            g = x;
            b = 0;
        } else if (60 <= h && h < 120) {
            r = x;
            g = c;
            b = 0;
        } else if (120 <= h && h < 180) {
            r = 0;
            g = c;
            b = x;
        } else if (180 <= h && h < 240) {
            r = 0;
            g = x;
            b = c;
        } else if (240 <= h && h < 300) {
            r = x;
            g = 0;
            b = c;
        } else {
            r = c;
            g = 0;
            b = x;
        }
        return [Math.round((r + m) * 255), Math.round((g + m) * 255), Math.round((b + m) * 255)];
    }
}
