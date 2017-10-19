import { Component, ElementRef } from '@angular/core';
import { ComparisonDataService } from '../../comparison/components/comparison-data.service';
import { ComparisonConfigService } from '../../comparison/components/comparison-config.service';
import { ComparisonCitationService } from '../../comparison/components/comparison-citation.service';
import { ComparisonService } from '../../comparison/components/comparison.service';

@Component({
    selector: 'latextable',
    templateUrl: './latex-table.component.html',
    styleUrls: ['./latex-table.component.css']
})
export class LatexTableComponent {
    public showTable = false;
    private showTableTooltips = true;
    private tableTooltipsAsFootnotes = false;

    constructor(public serv: ComparisonService,
                public dataServ: ComparisonDataService,
                public confServ: ComparisonConfigService,
                public citationServ: ComparisonCitationService,
                public element: ElementRef) {}
}