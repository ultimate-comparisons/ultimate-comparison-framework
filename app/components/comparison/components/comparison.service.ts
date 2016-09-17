import { Injectable }   from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import * as showdown from 'showdown';

@Injectable()
export class ComparisonService {
    public converter: Showdown.Converter;
    
    constructor(public _sanitizer: DomSanitizer){
        this.converter = new showdown.Converter(); 
    }
}