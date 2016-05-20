import {Pipe, PipeTransform}    from '@angular/core';

@Pipe({ 
    name: 'datafilter',
    pure: false
    
})
export class DataFilter implements PipeTransform {
    private query: any[];
    transform(value: Array<any>, args: Array<any> = []){
        this.query = args;
        if(!this.query){
            return value;
        }
        return value.filter((item) => {               
            return this.query.every(cont => {
                return (cont.value.length < 1) || this.intersect(cont.value, item[cont.crit.tag], cont.crit.selectOption)
            })
        })   
    }
    
    intersect(small_set: Array<string>, big_set: Array<string>, all:boolean){
        var inter:boolean = all;
        if(!big_set){
            return false;
        }
        if(all){
            // all elements from the small_set must be in the big_set
            small_set.every(element => {
                if(big_set.indexOf(element) < 0){
                    inter = false;
                    return false;
                }
                return true;
            });            
        }else{
            // at least one elmenet must fit
            small_set.some(element => {
                if(big_set.indexOf(element) > -1){
                    inter = true;
                    return true;
                }
            })
        }
        if(!inter&&small_set.length==0){
            return true;
        }
        return inter;
    }
}
