import { ListItem } from './ListItem';

export class Property{
    constructor(
        public plain = "",
        public text = "",
        public list: Array<ListItem> = new Array<ListItem>()
    ){}
}