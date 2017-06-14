import {
    Component, Input, Output, EventEmitter, ApplicationRef, ChangeDetectionStrategy,
    AfterViewChecked, ChangeDetectorRef
} from "@angular/core";
import { TableData, Data, CriteriaSelection } from "./../../comparison/shared/index";
import { ComparisonCitationService } from "./../../comparison/components/comparison-citation.service";
import { ComparisonConfigService } from "../../comparison/components/comparison-config.service";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { isNullOrUndefined } from "util";
import { Http } from "@angular/http";
declare let anchors;

@Component({
    selector: 'generictable',
    templateUrl: './generic-table.component.html',
    styleUrls: ['./generic-table.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenericTableComponent implements AfterViewChecked {
    private counter: number = 0;
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
        if (isNullOrUndefined(data.properties["Repo"]) || isNullOrUndefined(data.properties["Repo"].list[0])
            || isNullOrUndefined(data.properties["Repo"].list[1]) || isNullOrUndefined(data.properties["Repo"].list[2])) {
            return [];
        }
        if (!isNullOrUndefined(this.repoLabels[data.tag])) {
            return this.repoLabels[data.tag];
        }
        const repoType: string = data.properties["Repo"].list[0].content;
        const repoOwner: string = data.properties["Repo"].list[1].content;
        const repoName: string = data.properties["Repo"].list[2].content;
        const url = this.repoQueryBuildUrl(repoType, repoOwner, repoName);
        if (url === "") {
            return [];
        }
        this.http.get(url).toPromise().then(res => {
            const d: any = {};
            const commitDate = new Date(res.json()[0].commit.author.date);
            const diffDate = new Date(new Date().getTime() - commitDate.getTime());
            diffDate.setFullYear(0);
            const diff = diffDate.getTime();
            let child: string = "The last commit is ";
            if (diffDate.getFullYear() - 1970 > 0) {
                child += diffDate.getFullYear() - 1970 + (diffDate.getFullYear() - 1970 === 1 ? " year " : " years ");
            }
            if (diffDate.getMonth() > 0) {
                child += diffDate.getMonth() + (diffDate.getMonth() === 1 ? " month " : " months ");
            }
            if (diffDate.getDate() > 0) {
                child += diffDate.getDate() + (diffDate.getDate() === 1 ? " day " : " days ");
            }
            if (diffDate.getHours() > 0) {
                child += diffDate.getHours() + (diffDate.getHours() === 1 ? " hour " : " hours ");
            }
            child += "old";
            d.htmlChilds = child;
            for (const value in td.values) {
                if (isNullOrUndefined(td.values[value]["min-age"])) {
                    continue;
                }
                let minValueDate = new Date();
                let maxValueDate = new Date();
                minValueDate.setHours(0);
                minValueDate.setMinutes(0);
                minValueDate.setSeconds(0);
                minValueDate.setMilliseconds(0);

                maxValueDate.setHours(0);
                maxValueDate.setMinutes(0);
                maxValueDate.setSeconds(0);
                maxValueDate.setMilliseconds(0);
                if (td.values[value]["min-age"] === -1) {
                    minValueDate.setFullYear(0);
                    minValueDate.setMonth(0);
                    minValueDate.setDate(1);
                    minValueDate.setHours(0);
                } else {
                    if (td.values[value]["min-age-unit"] === 'y') {
                        minValueDate.setFullYear(td.values[value]["min-age"]);
                    } else {
                        minValueDate.setFullYear(0);
                    }
                    if (td.values[value]["min-age-unit"] === 'm') {
                        minValueDate.setMonth(td.values[value]["min-age"]);
                    } else {
                        minValueDate.setMonth(0);
                    }
                    if (td.values[value]["min-age-unit"] === 'd') {
                        minValueDate.setDate(td.values[value]["min-age"]);
                    } else {
                        minValueDate.setDate(0);
                    }
                }

                if (td.values[value]["max-age"] === -1) {
                    maxValueDate.setDate(maxValueDate.getDate() + 1);
                } else {
                    if (td.values[value]["max-age-unit"] === 'y') {
                        maxValueDate.setFullYear(td.values[value]["max-age"]);
                    } else {
                        maxValueDate.setFullYear(0);
                    }
                    if (td.values[value]["max-age-unit"] === 'm') {
                        maxValueDate.setMonth(td.values[value]["max-age"]);
                    } else {
                        maxValueDate.setMonth(0);
                    }
                    if (td.values[value]["max-age-unit"] === 'd') {
                        maxValueDate.setDate(td.values[value]["max-age"]);
                    } else {
                        maxValueDate.setDate(1);
                    }
                }

                if (minValueDate.getTime() <= diff && diff < maxValueDate.getTime()) {
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
    }

    private displayOrder(value: string, option: number): boolean {
        if (this.order.length === 0 && this.orderOption.length === 0) {
            this.order[this.ctrlCounter] = "tag";
            this.orderOption[this.ctrlCounter] = 1;
        }
        return this.order.findIndex(val => val == value) >= 0 && this.orderOption[this.order.findIndex(val => val == value)] == option;
    }

    ngAfterViewChecked(): void {
        const t = (<any>$("table.table.table-hover"));
        t.floatThead();
        anchors.options = {
            placement: 'right'
        };
        anchors.add('.anchored');
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

    private repoQueryBuildUrl(repoType: string, repoOwner: string, repoName: string) {
        let url: string;
        switch (repoType) {
            case "github":
                url = "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/commits";
                break;

            default:
                url = "";
                break;
        }
        return url;
    }
}