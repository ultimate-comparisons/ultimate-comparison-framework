import { PaperDialogComponent } from '../components/polymer/paper-dialog/paper-dialog.component';
import { Data } from "../components/comparison/components/data/data";

export interface IUCAppState {
    currentSearch: { [name: string]: any; };
    currentModal: PaperDialogComponent;
    currentFilter: Array<Data>;
}

export class UCAppState implements IUCAppState {
    currentSearch: { [name: string]: any; } = {};
    currentModal: PaperDialogComponent = null;
    currentFilter: Array<Data> = [];

    public set(state: IUCAppState) {
        this.currentModal = state.currentModal;
        this.currentSearch = state.currentSearch;
        this.currentFilter = state.currentFilter;
    }
}
