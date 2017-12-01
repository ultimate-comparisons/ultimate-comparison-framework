import { CriteriaSelection } from '../components/comparison/shared/components/criteria-selection';
import { PaperDialogComponent } from '../components/polymer/paper-dialog/paper-dialog.component';

export interface IUCAppState {
    currentFilter: { [name: string]: CriteriaSelection; };
    currentModal: PaperDialogComponent;
}

export class UCAppState implements IUCAppState {
    currentFilter: { [name: string]: CriteriaSelection; } = {};
    currentModal: PaperDialogComponent = null;
}
