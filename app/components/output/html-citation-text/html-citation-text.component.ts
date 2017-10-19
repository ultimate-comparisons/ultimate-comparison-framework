import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ComparisonCitationService } from './../../comparison/components/comparison-citation.service';
import { ComparisonService } from './../../comparison/components/comparison.service';

@Component({
    selector: 'htmlcitationtext',
    templateUrl: './html-citation-text.component.html',
    styleUrls: ['./html-citation-text.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HtmlCitationTextComponent {
    @Input() description = ' ';
    @Input() citationServ: ComparisonCitationService;

    constructor(public serv: ComparisonService) {
    }

    private makeMarkdown(text: string): string {
        if (text === null || text === undefined || text === '' || text === ' ') {
            return ' ';
        }
        if (typeof text === 'object') {
            text = text['tag'];
        }
        if (typeof text === 'number') {
            text = '' + text;
        }
        return this.serv.converter.makeHtml(text);
    }
}
