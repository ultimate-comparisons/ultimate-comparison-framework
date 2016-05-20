import {Pipe, PipeTransform}    from '@angular/core';

@Pipe({ 
    name: 'arrayfilter',
    pure: false 
})
export class ArrayFilter implements PipeTransform {
    transform(value: Array<Object>, args: any = []){
        for (let obj of value) {
            if(obj[args[0]] === args[1]){
                return obj;
            }
        }
    }
}
