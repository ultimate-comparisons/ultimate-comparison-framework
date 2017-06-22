import {
    Component,
    Input,
    Output,
    EventEmitter,
    ApplicationRef,
    ChangeDetectionStrategy,
    AfterViewChecked,
    ChangeDetectorRef,
    OnChanges
} from "@angular/core";
import { TableData, Data, CriteriaSelection } from "./../../comparison/shared/index";
import { ComparisonCitationService } from "./../../comparison/components/comparison-citation.service";
import { ComparisonConfigService } from "../../comparison/components/comparison-config.service";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { isNullOrUndefined } from "util";
import { Http } from "@angular/http";
declare let anchors;
declare let moment: any;

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

    @Output() repoLabels: {[column: string]: Array<{htmlChilds: string, content: string}>} = {};

    private ctrlCounter: number = 0;

    constructor(private ar: ApplicationRef,
                private confServ: ComparisonConfigService,
                private sanitization: DomSanitizer,
                private http: Http,
                private cd: ChangeDetectorRef) {
    }

    private getRepoLabels(td: TableData, data: Data) {
        if (isNullOrUndefined(data.properties["Repo"]) || isNullOrUndefined(data.properties["Repo"].list[0])) {
            return [];
        }
        if (!isNullOrUndefined(this.repoLabels[data.tag])) {
            return this.repoLabels[data.tag];
        }
        const repoUrl: string = data.properties["Repo"].list[0].content;
        const url = this.repoQueryBuildUrl(repoUrl);
        if (url === "") {
            return [];
        }
        this.http.get(url).toPromise().then(res => {
            const d: any = {};
            const commitDate = new Date(res.json()[0].commit.author.date);
            let child: string = "The last commit is ";
            const cd = moment(commitDate);
            const now = moment();
            const dateStrings = ['years', 'months', 'days', 'hours', 'minutes', 'seconds'];
            for (const s of dateStrings) {
                const diff = Math.abs(now.diff(cd, s));
                if (diff !== 0) {
                    child += diff;
                    // append unit in singular or plural
                    child += " " + (diff === 1 ? s.substr(0, s.length - 1) : s);
                    break;
                }
            }
            child += " old";
            d.htmlChilds = child;
            for (const value in td.values) {
                if (isNullOrUndefined(td.values[value]["min-age"])) {
                    continue;
                }

                const min = td.values[value]["min-age"];
                const minUnit = td.values[value]["min-age-unit"];
                const minDiff = Math.abs(now.diff(cd, minUnit));

                const max = td.values[value]["max-age"];
                const maxUnit = td.values[value]["max-age-unit"];
                const maxDiff = Math.abs(now.diff(cd, maxUnit));

                // min === -1 => no limit
                // same for max
                if ((min === -1 || min <= minDiff) && (max === -1 || max > maxDiff)) {
                    d.content = value;
                    if (isNullOrUndefined(this.repoLabels[data.tag])) {
                        this.repoLabels[data.tag] = [];
                    }
                    for (const item of this.repoLabels[data.tag]) {
                        if (item.content === d.content) {
                            this.repoLabels[data.tag].splice(this.repoLabels[data.tag].indexOf(item), 1);
                        }
                    }
                    this.repoLabels[data.tag].push(d);
                }
            }
            this.cd.markForCheck();
        });
    }

    private repoQueryBuildUrl(repoUrl: string) {
        let url: string;
        if (/https?:\/\/github\.com.*/.test(repoUrl)) {
            url = repoUrl.replace(/https?:\/\/github.com/, "https://api.github.com/repos");
            url += url.endsWith("/") ? "commits" : "/commits";
        }
        return url;
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

    public getColor(column: TableData,label: string): SafeHtml {
        return this.sanitization.bypassSecurityTrustStyle(column.type.colors.getColor(label));
    }
}