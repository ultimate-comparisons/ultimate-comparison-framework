import { Pipe, PipeTransform }    from '@angular/core';
import { ComparisonCitationService } from '../components/comparison-citation.service';

@Pipe({ 
    name: 'citation',
    pure: false
    
})
export class CitationPipe implements PipeTransform {
    transform(value: string, args: Array<any> = []){
        let citServ: ComparisonCitationService = args[0];
        let latex: boolean = args[1];
        let entries: Array<string> = new Array<string>();
        if (!latex){
            value = value.replace(/(?:\[@)([^\]]*)(?:\])/g, (match, dec) => { 
                entries.push(dec); 
                return '<a href="#'+ dec +'">' + citServ.getBibEntriesInline(dec) + '</a>';
            });
        } else {
            value = value.replace(/(?:\[@)([^\]]*)(?:\])/g, (match, dec) => {  
                return '\\cite{'+ dec +'}';
            });
        }
        citServ.addUsedEntries(entries);
        return value; 
    }
}