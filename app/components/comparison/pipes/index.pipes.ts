import { Type } from '@angular/core';

import { DataPipe } from './data.pipe';
import { TablePipe } from './table.pipe';

export const COMPARISON_PIPES: Type[] = [
    DataPipe,
    TablePipe
];