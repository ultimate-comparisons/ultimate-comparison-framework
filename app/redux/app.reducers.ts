import { IUCAppState, UCAppState } from './app.app-state';
import { UCAction } from './app.action';
import { isNullOrUndefined, isUndefined } from 'util';
import { CriteriaSelection } from '../components/comparison/shared/components/criteria-selection';
import { PaperDialogComponent } from '../components/polymer/paper-dialog/paper-dialog.component';
import { Data } from '../components/comparison/shared/components/data';

export const UPDATE_SEARCH = 'UPDATE_SEARCH';
export const UPDATE_MODAL = 'UPDATE_MODAL';
export const UPDATE_FILTER = 'UPDATE_FILTER';
export const UPDATE_ROUTE = 'UPDATE_ROUTE';

export let INITIAL_STATE: IUCAppState = new UCAppState();

export function routeReducer(state: IUCAppState = INITIAL_STATE, action: UCAction): IUCAppState {
    if (isUndefined(state)) {
        return INITIAL_STATE;
    }

    switch (action.type) {
        case UPDATE_ROUTE:
            for (const param of window.location.search.split('&')) {
                if (param.match(/state=.+/)) {
                    (<UCAppState>state).set(<IUCAppState>JSON.parse(decodeURIComponent(param.split('=')[1])));
                    return state;
                }
            }
            break;
        default: break;
    }
    return state;
}

export function searchReducer(state: IUCAppState = INITIAL_STATE, action: UCAction): IUCAppState {
    if (isUndefined(state)) {
        return INITIAL_STATE;
    }
    switch (action.type) {
        case UPDATE_SEARCH: state = {
            currentSearch: mergeSearches(state.currentSearch, <CriteriaSelection>action.value, state),
            currentModal: state.currentModal,
            currentFilter: state.currentFilter
        };
        break;
        default: return state;
    }
    return state;
}

export function modalReducer(state: IUCAppState = INITIAL_STATE, action: UCAction): IUCAppState {
    if (isUndefined(state)) {
        return INITIAL_STATE;
    }
    const newDialog = <PaperDialogComponent>action.value;
    switch (action.type) {
        case UPDATE_MODAL:
            if (isNullOrUndefined(action.value)) {
                state.currentModal.renderer.setStyle(state.currentModal.el.nativeElement, 'display', 'none');
                state.currentModal.el.nativeElement.classList.remove('model-open');
            } else {
                newDialog.renderer.setStyle(newDialog.el.nativeElement, 'display', 'grid');
                newDialog.el.nativeElement.classList.add('model-open');
            }
            state.currentModal = newDialog;
            break;
        default: return state;
    }
    updateRoute(state);
    return state;
}

export function filterReducer(state: IUCAppState = INITIAL_STATE, action: UCAction): IUCAppState {
    if (isUndefined(state)) {
        return INITIAL_STATE;
    }
    if (!action.value || action.value.constructor.name !== 'Data' || action.operation === 0) {
        return state;
    }
    const data = <Data>action.value;
    switch (action.type) {
        case UPDATE_FILTER:
            if (action.operation === 1 && state.currentFilter.indexOf(data) === -1) {
                state.currentFilter.push(data);
                data.enabled = false;
            } else if (action.operation === -1 && state.currentFilter.indexOf(data) > -1) {
                state.currentFilter.splice(state.currentFilter.indexOf(data), 1);
                data.enabled = true;
            }
            break;
        default: return state;
    }
    updateRoute(state);
    return state;
}

function updateRoute(state: IUCAppState) {
    window.history.pushState(0, '', '?state=' + encodeURIComponent(JSON.stringify(state)));
}

function mergeSearches(original: { [name: string]: CriteriaSelection }, update: CriteriaSelection, state: IUCAppState):
IUCAppState['currentSearch'] {
    if (!isNullOrUndefined(update.criteria)) {
        if (Array.isArray(update.values) && (<Array<string>>update.values).length > 0) {
            // Criteria is a label one

            original[update.criteria.tag] = update;
            updateRoute(state);
        } else if (update.values.constructor.name === 'KeyboardEvent') {
            // Criteria is range_search enabled

            const event = <any>update.values;

            if (original[update.criteria.name] && !event.metaKey && !event.key.match(/Arrow/)) {
                // Search for Criteria already exists

                (<{ target: { value: string } }>original[update.criteria.name].values).target.value = event.path[0].value;
                updateRoute(state);

            } else if (!original[update.criteria.name] && !event.metaKey && !event.key.match(/Arrow/)) {
                // Create new search for Criteria

                original[update.criteria.name] =
                    new CriteriaSelection({target: {value: (<KeyboardEvent>update.values).key}}, update.criteria);
                updateRoute(state);
            }
        } else if (original.hasOwnProperty(update.criteria.tag)) {
            // No search for the Criteria exists anymore
            delete original[update.criteria.tag];
            updateRoute(state);
        }
    }
    return original;
}
