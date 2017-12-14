import { ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
import { VersionInformation } from '../../../../VersionInformation';
import { PaperCardComponent } from "../../../polymer/paper-card/paper-card.component";
import { LatexTableComponent } from '../../../output/latex-table/latex-table.component';
import { Store } from '@ngrx/store';
import { IUCAppState } from '../../../../redux/app.app-state';
import { UPDATE_ROUTE } from '../../../../redux/app.reducers';
import { Observable } from 'rxjs';
import { PaperDialogComponent } from '../../../polymer/paper-dialog/paper-dialog.component';
import { Router } from '@angular/router';
import { ConfigurationService } from "../configuration/configuration.service";
import { Criteria } from "../configuration/configuration";
import { DataService } from "../data/data.service";
import { Data } from "../data/data";

// TODO evaluate how winery saves files
const FileSaver = require('file-saver');

@Component({
    selector: 'comparison',
    templateUrl: './comparison.template.html',
    styleUrls: ['./comparison.component.css']
})
export class ComparisonComponent {
    private changed = 0;

    private versionInformation: VersionInformation = new VersionInformation();

    @ViewChild(LatexTableComponent) latexTable: LatexTableComponent;
    @ViewChild('settings') settingsModal: any;
    @ViewChild('genericTableHeader') genericTableHeader: PaperCardComponent;

    // TODO move to redux
    public expanded = true;
    public activeRow: Data = new Data.Builder().build();
    @Input() public detailsOpen: boolean = false;


    public state: Observable<PaperDialogComponent>;
    public showLatexTable = true;

    constructor(public dataService: DataService,
                public configurationService: ConfigurationService,
                private cd: ChangeDetectorRef,
                private store: Store<IUCAppState>,
                private router: Router) {
        this.configurationService.loadComparison(this.cd);
        this.state = this.store.select('currentModal');
        this.router.events.subscribe(res => this.store.dispatch({type: UPDATE_ROUTE}))
    }

    public getVersionInformation(): VersionInformation {
        return this.versionInformation;
    }

    public criteriaChanged(value: Array<String> | KeyboardEvent | { target: { value: string } }, crit: Criteria) {
        if (value) {
            //this.store.dispatch({type: UPDATE_SEARCH, value: new CriteriaSelection(value, crit)});
        }
        this.cd.markForCheck();

        this.change();
    }

    public changeEnabled(item: Data) {
        //this.store.dispatch({type: UPDATE_FILTER, value: item, operation: item.enabled ? 1 : -1});
        this.change();
    }

    private showTableProperties() {
        this.settingsModal.open();
    }

    private downloadLatexTable() {
        let content: string = this.latexTable.element.nativeElement.textContent;
        content = content.substr(content.indexOf('%'), content.length);
        const blob: Blob = new Blob([content], {type: 'plain/text'});
        FileSaver.saveAs(blob, 'latextable.tex');
        return window.URL.createObjectURL(blob);
    }

    private previewLatexTable() {
        this.showLatexTable = !this.showLatexTable;
    }

    public change() {
        if (this.changed === 1) {
            this.changed = 0;
        } else {
            this.changed = 1;
        }
    }

    public getActive(state: IUCAppState, crit: Criteria): Array<string> {
        /* for (const el in state.currentSearch) {
             if (state.currentSearch.hasOwnProperty(el) && (crit.name === el || crit.tag === el)) {
                 if (crit.range_search) {
                     return [(<any>state.currentSearch[el].values).target.value];
                 } else {
                     return <Array<string>>state.currentSearch[el].values;
                 }
             }
         }*/
        return [];
    }

    public showDetails(index: number) {
        this.activeRow = this.dataService.data[index];
        this.detailsOpen = true;
    }

    public shrinkExpand() {
        if (this.expanded) {
            // TODO dispatch this.shrink();
        } else {
            //this.expand();
        }
        this.expanded = !this.expanded;
    }
}
