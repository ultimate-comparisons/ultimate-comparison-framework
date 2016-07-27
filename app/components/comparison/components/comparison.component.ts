import { Component, ViewChild, ElementRef } from '@angular/core';

import { PolymerElement } from '@vaadin/angular2-polymer';

import { COMPARISON_PIPES } from '../pipes/index.pipes';
import { ModalDialogComponent } from '../../modaldialog/index';
import { INPUT_COMPONENTS, INPUT_DIRECTIVES } from '../../input/index';
import { ComparisonDetailsComponent } from './comparison-details.component';
import { Data, CriteriaSelection, Criteria } from '../shared/index';

import { ComparisonConfigService } from './comparison-config.service';
import { ComparisonDataService } from './comparison-data.service';
import { ComparisonService } from './comparison.service';

@Component({
    selector: 'comparison',
    templateUrl: '../templates/comparison.template.html',
    pipes: [
        COMPARISON_PIPES
    ],
    directives: [
        ComparisonDetailsComponent,
        INPUT_COMPONENTS,
        INPUT_DIRECTIVES,
        ModalDialogComponent,
        PolymerElement('paper-header-panel'),
        PolymerElement('paper-dialog'),
        PolymerElement('paper-toolbar'),
        PolymerElement('paper-card'),
        PolymerElement('paper-listbox'),
        PolymerElement('paper-item'),
        PolymerElement('paper-checkbox'),
        PolymerElement('paper-tooltip')
    ],
    styleUrls: ['../styles/style.css'],
    moduleId: module.id
})
export class ComparisonComponent {
    criteriaSelection = [];
    private query: {[name: string]: CriteriaSelection;} = { };
    
    
    constructor(
            public serv: ComparisonService,
            public dataServ: ComparisonDataService,
            public confServ: ComparisonConfigService    
        ){
        this.confServ.loadComparison();
        this.confServ.loadCriteria();
        this.confServ.loadTableData();
    }

    private criteriaChanged(value:Array<String>, crit:Criteria ){
        if (value){
            this.query[crit.tag] = new CriteriaSelection(value,crit);
        }
    }
    
    @ViewChild('details') detailsModal: ModalDialogComponent;
    private activeRow: Data = new Data();
    private showDetails(data:Data){
        this.activeRow = data;
        this.detailsModal.open();
    }
    
    
    @ViewChild('settings') settingsModal: ModalDialogComponent;
    private showTableProperties(){
        this.settingsModal.open();
    }
}
