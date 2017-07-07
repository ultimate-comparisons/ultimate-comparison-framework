import {
    Component,
    Input,
    Output,
    EventEmitter,
    ApplicationRef,
    ChangeDetectionStrategy,
    AfterViewChecked,
    OnChanges
} from "@angular/core";
import { TableData, Data, CriteriaSelection } from "./../../comparison/shared/index";
import { ComparisonCitationService } from "./../../comparison/components/comparison-citation.service";
import { ComparisonConfigService } from "../../comparison/components/comparison-config.service";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
declare let anchors;

@Component({
    selector: 'generictable',
    templateUrl: './generic-table.component.html',
    styleUrls: ['./generic-table.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenericTableComponent implements AfterViewChecked, OnChanges {
    private counter: number = 0;
    private table;

    @Input() display: boolean = false;
    @Input() settings: boolean = false;
    @Input() columns: Array<TableData> = new Array<TableData>();

    @Input() data: Array<Data> = new Array<Data>();
    @Input() query: {[name: string]: CriteriaSelection;} = {};
    @Input() displayTemplate: boolean = false;

    @Input() citationServ: ComparisonCitationService;

    @Output() settingsCallback: EventEmitter<any> = new EventEmitter();
    @Output() showDetails: EventEmitter<any> = new EventEmitter();

    @Input() changeNum: number = 0;

    @Input() order: Array<String> = new Array<String>();
    @Output() orderChange: EventEmitter<any> = new EventEmitter();
    @Input() orderOption: Array<number> = new Array<number>();
    @Output() orderOptionChange: EventEmitter<any> = new EventEmitter();

    private ctrlCounter: number = 0;

    constructor(private ar: ApplicationRef,
                private confServ: ComparisonConfigService,
                private sanitization: DomSanitizer) {
    }

    private orderClick(e: MouseEvent, value: string) {
        let pos: number = this.order.findIndex(name => name == value);
        if (e.ctrlKey) {
            this.ctrlCounter = this.order[this.ctrlCounter] == value ? this.ctrlCounter : this.ctrlCounter + 1;
        } else {
            this.ctrlCounter = 0;
        }
        if (typeof pos != 'undefined' && pos >= 0) {
            this.order[this.ctrlCounter] = value;
            this.orderOption[this.ctrlCounter] = this.orderOption[pos] == 1 ? -1 : 1;
            this.orderOption[pos] = pos != this.ctrlCounter ? 0 : this.orderOption[this.ctrlCounter];
        } else {
            this.order[this.ctrlCounter] = value;
            this.orderOption[this.ctrlCounter] = 1;
        }
        if (this.ctrlCounter == 0) {
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
            this.order[this.ctrlCounter] = "tag";
            this.orderOption[this.ctrlCounter] = 1;
        }
        return this.order.findIndex(val => val == value) >= 0 && this.orderOption[this.order.findIndex(val => val == value)] == option;
    }

    ngAfterViewChecked(): void {
        this.table = (<any>$("table.table.table-hover"));
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
        for (let column of this.confServ.tableDataSet.getTableDataArray()) {
            if (column.display && data.properties[column.tag] != null && data.properties[column.tag].plain != "") {
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
        const h = Number.parseInt(color["changingThisBreaksApplicationSecurity"].substr(4, 3).split(',')[0]);
        const s = 100;
        const l = 88;
        const rgb = this.hslToRgb(h, s, l);
        const yiq = ((rgb[0]*299)+(rgb[1]*587)+(rgb[2]*114))/1000;
        return this.sanitization.bypassSecurityTrustStyle((yiq >= 128) ? 'black' : 'white');
    }

    private hslToRgb(h, s, l){
        // fix values: 0<=h<360, 0<=s<=1, 0<=l<=1
        h = h % 360;
        s = s > 1 ? s / 100 : s;
        l = l > 1 ? l / 100 : l;

        // algorithm according to http://www.rapidtables.com/convert/color/hsl-to-rgb.htm
        const c = (1 - Math.abs(2 * l - 1)) * s;
        const x = c * (1 - Math.abs((h/60) % 2 - 1));
        const m = l - c/2;


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
        return [Math.round((r+m)*255), Math.round((g+m)*255), Math.round((b+m)*255)];
    }
}