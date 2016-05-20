import {Pipe, PipeTransform}    from '@angular/core';

@Pipe({ 
    name: 'objectfilter',
    pure: false 
})
export class ObjectFilter implements PipeTransform {
    transform(value: Object, args: any){
        return value[args];
    }
}
