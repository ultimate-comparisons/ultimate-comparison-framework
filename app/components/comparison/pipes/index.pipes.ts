import { Type } from '@angular/core';

import { DataPipe } from './data.pipe';
import { TablePipe } from './table.pipe';
import { OrderByPipe } from './orderby.pipe'

export const COMPARISON_PIPES: Type[] = [
    DataPipe,
    TablePipe,
    OrderByPipe
];