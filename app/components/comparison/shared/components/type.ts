import { LabelCls } from './labelcls';

export class Type {
    constructor(
        public tag: string = "",
        public cls: string = "",
        public labelCls: LabelCls = new LabelCls()     
    ){}
}