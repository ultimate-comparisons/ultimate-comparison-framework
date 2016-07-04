import {Pipe, PipeTransform}    from '@angular/core';
import { TableData } from './../components/shared/index';

@Pipe({ 
    name: 'tablefilter',
    pure: false 
})
export class TableFilter implements PipeTransform {
    transform(value: Array<TableData>, args: any): Array<TableData>{
        return value.filter((item) => item.display)
    }
}
