import { Action } from '@ngrx/store';
import { PaperDialogComponent } from '../components/polymer/paper-dialog/paper-dialog.component';
import { Data } from "../components/comparison/components/data/data";

export class UCAction implements Action {
    type: string;
    value: PaperDialogComponent | any | { keyboard: KeyboardEvent, criteria: any } | Data;
    /**
     * Only important for filters.
     * 1 adds the filter
     * -1 removes the filter
     * 0 is the default value and doesn't do anything
     * @type {number} 1, 0, or -1
     */
    operation: 1 | -1 | 0 = 0;
}
