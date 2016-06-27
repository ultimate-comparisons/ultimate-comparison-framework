export class LabelCls{
    constructor(
        public label_success: Array<String> = Array<String>(),
        public label_warning: Array<String> = Array<String>(),
        public label_danger: Array<String> = Array<String>(),
        public label_default: Array<String> = Array<String>(),
        public label_info: Array<String> = Array<String>(),
        public label_primary: Array<String> = Array<String>()
    ){}
    
    public getCls(item:string): string{
        if(this.label_success.some(it => it == item)){
            return "label-success";
        }
        if(this.label_warning.some(it => it == item)){
            return "label-warning";
        }
        if(this.label_danger.some(it => it == item)){
            return "label-danger";
        }
        if(this.label_default.some(it => it == item)){
            return "label-default";
        }
        if(this.label_info.some(it => it == item)){
            return "label-info";
        }
        if(this.label_primary.some(it => it == item)){
            return "label-primary";
        }
        return "";
    }
}