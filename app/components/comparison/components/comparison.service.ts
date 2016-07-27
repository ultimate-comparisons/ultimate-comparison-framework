import { Injectable } from '@angular/core';
import { DomSanitizationService } from '@angular/platform-browser';

import * as showdown from 'showdown';

@Injectable()
export class ComparisonService {
    public converter: Showdown.Converter;
    
    constructor(public _sanitizer: DomSanitizationService){
        this.converter = new showdown.Converter(); 
    }
}