import {Pipe, PipeTransform}    from '@angular/core';

@Pipe({ 
    name: 'tablefilter',
    pure: false 
})
export class TableFilter implements PipeTransform {
    transform(value: Array<any>, args: any){
        return value.filter((item) => item.display)
    }
}
