import { Pipe, PipeTransform }    from '@angular/core';
import { ComparisonCitationService } from '../components/comparison-citation.service';

@Pipe({ 
    name: 'citation',
    pure: false
    
})
export class CitationPipe implements PipeTransform {
    transform(value: string, args: Array<any> = []){
        let citServ: ComparisonCitationService = args[0];
        value = value.replace(/(?:\[@)([^\]]*)(?:\])/g, (match, dec) => { 
            citServ.addUsedEntry(dec); 
            return '<a href="#'+ dec +'">' + citServ.getBibEntriesInline(dec) + '</a>';
        });
        return value; 
    }
}