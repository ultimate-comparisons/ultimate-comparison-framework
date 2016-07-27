import { Type } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { Title } from '@angular/platform-browser';

import { ComparisonComponent } from './components/comparison.component';

import { ComparisonService } from './components/comparison.service'; 
import { ComparisonDataService } from './components/comparison-data.service'; 
import { ComparisonConfigService } from './components/comparison-config.service'; 

export const COMPARISON_DIRECTIVES: Type[] = [
    ComparisonComponent
];

export const COMPARISON_PROVIDERS: Type[] = [
    ComparisonService,
    ComparisonDataService,
    ComparisonConfigService,
    ...HTTP_PROVIDERS,
    Title
];