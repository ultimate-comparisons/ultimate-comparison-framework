import { PaperDialogComponent } from '../components/polymer/paper-dialog/paper-dialog.component';
import { Data } from '../components/comparison/components/data/data';
import { Criteria } from '../components/comparison/components/configuration/configuration';

export interface IUCAppState {
    /**
     * Which criteria has to fulfill which condition (set at the top of the page in the boxes)
     */
    currentSearch: Map<string, Array<string>>;
    /**
     * Which element's details page should be shown. -1 if none.
     */
    currentDetails: number;
    /**
     * Which elements are disabled.
     */
    currentFilter: Array<number>;
    /**
     * Which elements should be shown after the filter and the search are applied.
     */
    currentElements: Array<Data>;
    /**
     * Which columns are shown. The column whose index is saved in this array are shown if their default is hidden and vice versa.
     */
    currentColumns: Array<number>;
    /**
     * Determines if the table is maximized (all columns are shown) if it is minimized afterwards, it returns to {@see #currentColumns}.
     */
    currentlyMaximized: boolean;
    /**
     * Which column determines the order of the elements. Negative number means descending, positive number ascending.
     */
    currentOrder: string;
    criterias: Map<string, Criteria>;
    /**
     * List of columns that should be shown.
     */
    shownColumns: Array<string>;
}

export class UCAppState implements IUCAppState {
    currentColumns: Array<number> = [];
    currentlyMaximized = false;
    currentOrder = '+id';
    currentSearch: Map<string, Array<string>> = new Map<string, Array<string>>();
    currentDetails = -1;
    currentFilter: Array<number> = [];
    currentElements: Array<Data> = [];
    criterias: Map<string, Criteria> = null;
    shownColumns: Array<string> = [];
}
