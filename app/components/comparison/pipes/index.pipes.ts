import { Type } from '@angular/core';

import { DataPipe } from './data.pipe';
import { TablePipe } from './table.pipe';
import { OrderByPipe } from './orderby.pipe';
import { CitationPipe } from './citation.pipe';
import { SanitizerPipe } from './sanitizer.pipe';

export const COMPARISON_PIPES: Type<any>[] = [
    DataPipe,
    TablePipe,
    OrderByPipe,
    CitationPipe,
    SanitizerPipe
];