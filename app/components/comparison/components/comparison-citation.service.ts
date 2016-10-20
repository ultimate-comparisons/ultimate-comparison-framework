import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ComparisonCitationService {
    public bibEntriesHtml = {};
    public bibEntriesInline = {};
    private keys: {[name: string]: string;} = { };
    public references: Array<String> = [];
    
    constructor(
        private http: Http
    ){}
    
    public loadCitationData(){
        this.http.request('citation/output/fbib.json')
        .subscribe(res => {
            this.bibEntriesHtml = res.json();
        });
        this.http.request('citation/output/fkeys.json')
        .subscribe(res => {
            this.bibEntriesInline = res.json();
        });        
    }
    
    public getUsedEntries(){
        let entries: Array<any> = new Array<any>();
        for(let key in this.keys){
            if (!this.keys.hasOwnProperty(key)) continue;
            entries.push({key:key,html:this.bibEntriesHtml[this.keys[key]]});
        }
        return entries.length > 0 ? entries : [{key:"emty",html:""}];
    }
    
    public addUsedEntries(entries){
        let newEntries: Array<String> = new Array<String>();
        for (let index in entries){
            let entry = entries[index];    
            if (!this.keys[entry]){
                newEntries.push(entry);
                this.keys[entry] = entry;   
            }
        }
        if (newEntries.length >0){
            if(this.references){
                this.references = this.references.concat(newEntries);
            } else {
                this.references = newEntries;
            }  
        } 
    }
    
    public getBibEntriesHtml(key){
        return this.bibEntriesHtml[key];
    }
    
    public getBibEntriesInline(key){
        return this.bibEntriesInline[key];
    }
}