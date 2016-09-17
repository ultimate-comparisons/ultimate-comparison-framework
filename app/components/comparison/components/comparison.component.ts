import { Component, ViewChild, ElementRef } from '@angular/core';

import { Data, CriteriaSelection, Criteria, TableData } from '../shared/index';
import { ModalDialogComponent } from '../../modaldialog/index';

import { ComparisonConfigService } from './comparison-config.service';
import { ComparisonDataService } from './comparison-data.service';
import { ComparisonService } from './comparison.service';

@Component({
    selector: 'comparison',
    templateUrl: '../templates/comparison.template.html',
    styleUrls: ['../styles/style.css'],
    moduleId: module.id
})
export class ComparisonComponent {
    criteriaSelection = [];
    private query: {[name: string]: CriteriaSelection;} = { };
    private order: Array<String> = new Array<String>(3);
    private orderOption: Array<number> = new Array<number>(3);
    private ctrlCounter:number = 0;
    
    constructor(
            public serv: ComparisonService,
            public dataServ: ComparisonDataService,
            public confServ: ComparisonConfigService    
        ){
        this.confServ.loadComparison();
        this.confServ.loadCriteria();
        this.confServ.loadTableData();
        this.confServ.loadDescription();
        
        this.order[0] = this.order[1] = this.order[2] = "tag";
        this.orderOption[0] = 1;
        this.orderOption[1] = this.orderOption[2] = 0;
    } 
    
    private criteriaChanged(value:Array<String>, crit:Criteria ){
        if (value){
            this.query[crit.tag] = new CriteriaSelection(value,crit);
        }
    }
    
    private orderChanged(value:String, pos:number){
        if(this.order.length > pos){
            this.order[pos] = value;
        }
    }
    private orderOptionChanged(value:number, pos:number){
        if(this.orderOption.length > pos){
            this.orderOption[pos] = value;
        }
    }
    
    private orderClick(e:MouseEvent, value:string){
        let pos:number = this.order.findIndex(name => name == value);
        if(e.ctrlKey){
            this.ctrlCounter = this.order[this.ctrlCounter] == value ? this.ctrlCounter: this.ctrlCounter + 1;
        } else {
            this.ctrlCounter = 0;
        }
        if(typeof pos != 'undefined' && pos >= 0){
            this.order[this.ctrlCounter] = value;
            this.orderOption[this.ctrlCounter] = this.orderOption[pos] == 1? -1: 1;
            this.orderOption[pos] = pos != this.ctrlCounter? 0 : this.orderOption[this.ctrlCounter];
        } else {
            this.order[this.ctrlCounter] = value;
            this.orderOption[this.ctrlCounter] = 1;
        }
        if (this.ctrlCounter == 0){
            for (let i = 1; i < this.orderOption.length; i++) {
                this.orderOption[i] = 0;
            } 
        }
    }
    
    private displayOrder(value:string, option:number): boolean{
        return this.order.findIndex(val => val == value) >= 0 && this.orderOption[this.order.findIndex(val => val == value)] == option;
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
