import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ComparisonCitationService {
    public bibEntriesHtml = {};
    public bibEntriesInline = {};
    private keys: {[name: string]: string;} = { };
    public references: Array<string> = new Array<string>();
    
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
    
    public addUsedEntry(entry){
        if (!this.keys[entry]){
            this.references.push(entry);
            this.keys[entry] = entry;
        }
        
    }
    
    public getBibEntriesHtml(key){
        return this.bibEntriesHtml[key];
    }
    
    public getBibEntriesInline(key){
        return this.bibEntriesInline[key];
    }
}