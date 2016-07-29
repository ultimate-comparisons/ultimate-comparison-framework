import * as showdown from 'showdown';

export class ListItem{
    public htmlChilds: string = "";
    constructor(
        public content: string = "",
        public plainChilds: string = "",
        public converter: Showdown.Converter 
    ){
        this.convertChilds();
    }
    
    public convertChilds(){
        this.htmlChilds = this.converter.makeHtml(this.plainChilds.replace(/^[\s]{3}/gm, ""));
    }
    
    public getLabel(){
        return this.content + this.htmlChilds;
    }
    
}