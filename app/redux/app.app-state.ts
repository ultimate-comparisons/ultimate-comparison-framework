import { CriteriaSelection } from '../components/comparison/shared/components/criteria-selection';
import { PaperDialogComponent } from '../components/polymer/paper-dialog/paper-dialog.component';
import { Data } from '../components/comparison/shared/components/data';

export interface IUCAppState {
    currentSearch: { [name: string]: CriteriaSelection; };
    currentModal: PaperDialogComponent;
    currentFilter: Array<Data>;
}

export class UCAppState implements IUCAppState {
    currentSearch: { [name: string]: CriteriaSelection; } = {};
    currentModal: PaperDialogComponent = null;
    currentFilter: Array<Data> = [];

    public set(state: IUCAppState) {
        this.currentModal = state.currentModal;
        this.currentSearch = state.currentSearch;
        this.currentFilter = state.currentFilter;
    }
}
