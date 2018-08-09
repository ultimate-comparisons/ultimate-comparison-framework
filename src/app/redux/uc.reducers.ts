import { IUCAppState, UcAppState } from './uc.app-state';
import {
    UCAction,
    UCClickAction,
    UCDataUpdateAction,
    UCDetailsAction,
    UCNewStateAction,
    UCRouterAction,
    UCSearchUpdateAction,
    UCSettingsUpdateAction,
    UCTableOrderAction
} from './uc.action';
import { isNullOrUndefined } from 'util';
import { ConfigurationService } from '../components/comparison/configuration/configuration.service';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';
import { Criteria, CriteriaData, CriteriaTypes, DataElement, Label } from '../../../lib/gulp/model/model.module';

export const UPDATE_SEARCH = 'UPDATE_SEARCH';
export const UPDATE_MODAL = 'UPDATE_MODAL';
export const UPDATE_FILTER = 'UPDATE_FILTER';
export const UPDATE_DATA = 'UPDATE_DATA';
export const UPDATE_ORDER = 'UPDATE_ORDER';
export const UPDATE_SETTINGS = 'UPDATE_SETTINGS';
const UPDATE_ROUTE = 'ROUTER_NAVIGATION';
export const CLICK_ACTION = 'CLICK_ACTION';
export const NEW_STATE_ACTION = 'NEW_STATE_ACTION';
export const TOGGLE_DETAILS_ACTION = 'TOGGLE_DETAILS_ACTION';

const update_actions =
    [UPDATE_SEARCH, UPDATE_MODAL, UPDATE_FILTER, UPDATE_DATA, UPDATE_ORDER, UPDATE_SETTINGS, CLICK_ACTION, UPDATE_ROUTE];

let reloadedState = false;

export function masterReducer(state: IUCAppState = new UcAppState(), action: UCAction) {
    switch (action.type) {
        case TOGGLE_DETAILS_ACTION:
            state = toggleDetailsReducer(state, <UCDetailsAction>action);
            state = updateElements(state);
            break;
        case CLICK_ACTION:
            state = clickReducer(state, <UCClickAction>action);
            break;
        case UPDATE_SEARCH:
            state = searchReducer(state, <UCSearchUpdateAction>action);
            break;
        case UPDATE_MODAL:
            state = detailsReducer(state, action);
            break;
        case UPDATE_FILTER:
            state = filterReducer(state, action);
            break;
        case UPDATE_ROUTE:
            state = routeReducer(state, <UCRouterAction>action);
            break;
        case UPDATE_DATA:
            state.criterias = (<UCDataUpdateAction>action).criterias;
            state = initSettings(state);
            state = filterColumns(state);
            state = setDetails(state);
            break;
        case UPDATE_ORDER:
            state = changeOrder(state, <UCTableOrderAction>action);
            state = sortElements(state);
            break;
        case UPDATE_SETTINGS:
            const act: UCSettingsUpdateAction = <UCSettingsUpdateAction>action;
            switch (act.operation) {
                case 'ColumnDisplayAll':
                    state = columnDisplayAll(state, act.enable);
                    state = filterColumns(state);
                    break;
                case 'ColumnChange':
                    state = columnDisplayChange(state, act.value);
                    state = filterColumns(state);
                    break;
                case 'ElementDisplayAll':
                    state.elementsEnabled = state.elementsEnabled.map(() => act.enable);
                    state.elementDisplayAll = act.enable;
                    break;
                case 'ElementChange':
                    state.elementsEnabled[act.value] = !state.elementsEnabled[act.value];
                    state.elementDisplayAll = state.elementsEnabled.filter(value => value).length === state.elementNames.length;
                    break;
                case 'TableExpand':
                    if (act.enable) {
                        state = columnDisplayAll(state, act.enable);
                    } else {
                        state.columnsEnabled = state.columnsEnabledCache;
                        state.columnDisplayAll = act.enable;
                    }
                    state = filterColumns(state);
                    state.tableExpand = act.enable;
                    break;
            }
            switch (act.operation) {
                case 'LatexDisplayTable':
                    state.latexDisplayTable = act.enable;
                    break;
                case 'LatexEnableTooltips':
                    state.latexEnableTooltips = act.enable;
                    break;
                case 'LatexTooltipsAsFootnotes':
                    state.latexTooltipsAsFootnotes = act.enable;
                    break;
                case 'SettingsOpenChange':
                    if (!act.enable && !state.columnDisplayAll) {
                        state.columnsEnabledCache = state.columnsEnabled;
                    }
                    break;
                case 'DetailsDisplayTooltips':
                    state.detailsDisplayTooltips = act.enable;
                    break;
            }
            break;
        case NEW_STATE_ACTION:
            if (!isNullOrUndefined((<UCNewStateAction>action).newState)) {
                state = (<UCNewStateAction>action).newState;
                reloadedState = true;
                // allow changes to take effect 0.2 seconds after a state was reloaded.
                setTimeout(() => reloadedState = false, 200);
            }
            break;
    }
    if (update_actions.indexOf(action.type) > -1 || action.type === UPDATE_ROUTE && !reloadedState) {
        if (action.type === UPDATE_ROUTE) {
            state.currentElements = [];
            state.currentSearch = new Map();
            state.currentFilter = [];
            state.currentDetails = -1;
        }
        state.currentChanged = false;
        state = filterElements(state);
        state = sortElements(state);
        state = updateElements(state);
    }
    return state;
}

function clickReducer(state: IUCAppState, action: UCClickAction) {
    const column = state.currentColumns[action.index];
    const criteria = state.criterias.get(column);
    const search = state.currentSearch.get(criteria.id);
    if (criteria.rangeSearch) {
        if (search === undefined) {
            state.currentSearch.set(criteria.id, new Set([action.val]));
        } else {
            const s = search.values().next().value;
            if (s.trim() === action.val || s.trim().startsWith(action.val + ',') ||
                s.indexOf(',' + action.val + ',') > -1 ||
                s.endsWith(',' + action.val)) {
                return state;
            }
            state.currentSearch.set(criteria.id, new Set([s + ',' + action.val]));
        }
    } else {
        if (search === undefined) {
            state.currentSearch.set(criteria.id, new Set([action.val]));
        } else {
            search.add(action.val);
            state.currentSearch.set(criteria.id, search);
        }
    }
    return state;
}

function setDetails(state: IUCAppState): IUCAppState {
    if (!state.detailsOpen) {
        return state;
    }
    ConfigurationService.data.dataElements.forEach(dataElement => {
        if (state.detailsData && dataElement.name === state.detailsData.name) {
            state.detailsData = dataElement;
        }
    });
    return state;
}


function columnDisplayChange(state: IUCAppState, index: number): IUCAppState {
    state.columnsEnabled[index] = !state.columnsEnabled[index];
    state.columnDisplayAll = state.columnsEnabled.filter(value => value).length === state.columnNames.length;
    state.tableExpand = state.columnDisplayAll;
    return state;
}

function columnDisplayAll(state: IUCAppState, enable: boolean): IUCAppState {
    state.columnsEnabled = state.columnsEnabled.map(() => enable);
    state.columnDisplayAll = enable;
    state.tableExpand = enable;
    return state;
}


function changeOrder(state: IUCAppState, action: UCTableOrderAction): IUCAppState {
    const key: string = state.currentColumns[action.index];
    const prefix: string = state.currentOrder.indexOf('+'.concat(key)) === -1 ? '+' : '-';

    if (action.ctrl) {
        const index = state.currentOrder.indexOf((prefix === '-' ? '+' : '-').concat(key));
        if (index !== -1) {
            state.currentOrder[index] = prefix.concat(key);
        } else {
            state.currentOrder.push(prefix.concat(key));
        }
    } else {
        state.columnOrder = [];
        state.currentOrder = [prefix + key];
    }

    state.columnOrder[action.index] = prefix === '+' ? 1 : -1;
    return state;
}

function updateElements(state: IUCAppState): IUCAppState {
    if (state.currentChanged || !state.currentSaved) {
        putStateIntoURL(state);
        state.currentSaved = true;
    }
    return state;
}

function initSettings(state: IUCAppState): IUCAppState {
    // Set elements settings
    const elementNames: Array<string> = [];
    const elementsEnabled: Array<boolean> = [];
    ConfigurationService.data.dataElements.forEach((value, index) => {
        elementNames.push(value.name);
        if (state.loadedElementsEnabled.length > 0) {
            elementsEnabled.push(!isNullOrUndefined(state.loadedElementsEnabled[index]));
        } else if (value.name === 'Template') {
            elementsEnabled.push(false);
        } else {
            elementsEnabled.push(true);
        }
    });
    state.elementNames = elementNames;
    state.elementsEnabled = elementsEnabled;
    state.elementDisplayAll = false;

    // Set column settings
    state = initColumn(state);

    // Set latex settings
    state.latexDisplayTable = false;
    state.latexEnableTooltips = false;
    state.latexTooltipsAsFootnotes = false;

    return state;
}

function initColumn(state: IUCAppState): IUCAppState {
    const columnKeys: Array<string> = [];
    const columnNames: Array<string> = [];
    const columnsEnabled: Array<boolean> = [];
    const columnsEnabledCache: Array<boolean> = [];
    state.criterias.forEach((value, key) => {
        const name: string = value.id.length !== 0 ? key : value.name;
        columnKeys.push(key);
        columnNames.push(name);
        columnsEnabled.push(value.table);
        columnsEnabledCache.push(value.table);
    });
    state.columnKeys = columnKeys;
    state.columnNames = columnNames;
    state.columnsEnabled = columnsEnabled;
    state.columnsEnabledCache = columnsEnabledCache;
    state.columnDisplayAll = columnsEnabled.filter(value => value).length === columnNames.length;
    return state;
}

function putStateIntoURL(state: IUCAppState) {
    let query = '';
    if (state.currentSearch.size > 0) {
        query = 'search=';
        for (const [key, value] of state.currentSearch) {
            let crit = key;
            for (const val of value) {
                crit += `:${val}`;
            }
            query += `${encodeURIComponent(crit)};`;
        }
        query = query.substr(0, query.length - 1);
    }
    if (state.currentElements.length > 0) {
        if (query.length > 0) {
            query += '&';
        }
        query += 'elements=';
        for (let index = 0; index < ConfigurationService.data.dataElements.length; index++) {
            if (state.elementsEnabled[index]) {
                query += `${index};`;
            }
        }
        query = query.substr(0, query.length - 1);
    }
    if (state.currentFilter.length > 0) {
        if (query.length > 0) {
            query += '&';
        }
        query += 'filter=';
        for (const filter of state.currentFilter) {
            query += `${filter},`;
        }
        query = query.substr(0, query.length - 1);
    }
    if (state.currentColumns.length > 0) {
        if (query.length > 0) {
            query += '&';
        }
        query += 'columns=';
        for (const column of state.currentColumns) {
            query += `${encodeURIComponent(column)},`;
        }
        query = query.substr(0, query.length - 1);
    }
    if (state.currentlyMaximized) {
        if (query.length > 0) {
            query += '&';
        }
        query += 'maximized=';
    }
    if (state.currentOrder.length > 0) {
        if (query.length > 0) {
            query += '&';
        }
        query += 'order=';
        for (const order of state.currentOrder) {
            query += `${encodeURIComponent(order)},`;
        }
        query = query.substr(0, query.length - 1);
    }
    if (state.detailsOpen && !isNullOrUndefined(state.detailsData)) {
        if (query.length > 0) {
            query += '&';
        }
        query += 'details=';
        query += (<DataElement>state.detailsData).name;
    }
    const questionMark = query.length > 0;
    if (window.location.hash.length > 1) {
        query += window.location.hash;
    }
    if (query.length > 0) {
        window.history.pushState(state, '', (questionMark ? '?' : '') + query);
    }
}

function filterColumns(state: IUCAppState, columns: Map<string, boolean> = new Map()): IUCAppState {
    if (state.criterias === null) {
        return state;
    }

    const currentColumns = [];
    state.columnKeys.forEach((value, index) => {
        if (state.columnsEnabled[index]) {
            currentColumns.push(value);
        }
    });
    state.currentColumns = currentColumns;

    const columnNames = [];
    const columnTypes = [];
    state.currentColumns.forEach(key => {
        const criteria: Criteria = state.criterias.get(key);
        columnNames.push(criteria.name);
        columnTypes.push(criteria.type);
    });
    state.currentColumnNames = columnNames;
    state.columnTypes = columnTypes;

    const columnOrder = [];
    state.currentOrder.forEach(pk => {
        let index;
        if (pk.startsWith('-') && (index = state.currentColumns.indexOf(pk.substring(1))) !== -1) {
            columnOrder[index] = -1;
        } else if (pk.startsWith('+') && (index = state.currentColumns.indexOf(pk.substring(1))) !== -1) {
            columnOrder[index] = 1;
        } else if ((index = state.currentColumns.indexOf(pk)) !== -1) {
            columnOrder[index] = 1;
        }
    });
    state.columnOrder = columnOrder;

    return state;
}

function filterElements(state: IUCAppState, criterias: Map<string, Criteria> = null) {
    // Initialize state.criteria if null
    if (state.criterias === null && criterias !== null) {
        state.criterias = criterias;
        state.currentChanged = true;
    }

    // Stop filtering if criteria is null
    if (state.criterias === null) {
        return state;
    }

    // Get data elements if null return
    const data: Array<DataElement> = ConfigurationService.data.dataElements;
    if (isNullOrUndefined(data)) {
        return state;
    }

    // Start building array used for table
    const dataElements: Array<Array<CriteriaData>> = [];
    const indexes: Array<number> = [];

    data.forEach((dataElement, i) => {
        if (state.currentFilter.indexOf(i) !== -1 || !state.elementsEnabled[i]) {
            return;
        }

        let includeData = true;
        state.currentSearch.forEach((filterValueSet, filterCriteriaKey) => {
            const filterCriteria = state.criterias.get(filterCriteriaKey);
            if (isNullOrUndefined(filterCriteria)) {
                return;
            }

            // Filter for number label columns
            if (filterCriteria.rangeSearch) {
                if (state.currentSearch.get(filterCriteriaKey).size > 0) {
                    // take the field or an empty string (to prevent null pointer errors)
                    const queries = (state.currentSearch.get(filterCriteriaKey).values().next().value || '').trim()
                    // replace spaces with empty strings
                        .replace(' ', '')
                        // remove elements that contain letters.
                        // first group is a comma followed by some characters (not comma) that contains a letter
                        // the second group is the same only with a comma at the end
                        // the third group is if there is no comma at all
                        .replace(/,[^,]*[a-zA-Z][^,]*|[^,]*[a-zA-Z][^,]*,|[^,]*[a-zA-Z][^,]*/g, '').split(',');
                    if (queries.length === 0 || queries.map(y => y.length === 0).reduce((p, c) => p && c)) {
                        return;
                    }
                    let includeElement = false;
                    for (const query of queries) {
                        const splits = query.split('-');
                        let a = Number.MAX_VALUE;
                        let b = Number.MIN_VALUE;
                        if (splits.length === 1) {
                            a = b = Number.parseInt(splits[0]);
                            // only one number in the query
                        } else if (splits.length === 2 && splits[0].length === 0) {
                            // only one number in the query and it is negative
                            a = b = -1 * Number.parseInt(splits[1]);
                        } else if (splits.length === 2 && splits[0].length > 0 && splits[1].length > 0) {
                            // range search with two positive numbers
                            a = Number.parseInt(splits[0]);
                            b = Number.parseInt(splits[1]);
                            if (a > b) {
                                const c = b;
                                b = a;
                                a = c;
                            }
                        } else if (splits.length === 2 && splits[0].length > 0 && splits[1].length === 0) {
                            // intermittent range search, something like `250-` inbetween entering valid states
                            a = b = Number.parseInt(splits[0]);
                        } else if (splits.length === 3 && splits[0].length === 0 && splits[2].length === 0) {
                            // intermittent range search, something like `-250-` inbetween entering valid states
                            a = b = -1 * Number.parseInt(splits[1]);
                        } else if (splits.length === 3 && splits[0].length === 0 && splits[2].length > 0) {
                            // range search with first number negative
                            a = -1 * Number.parseInt(splits[1]);
                            b = Number.parseInt(splits[2]);
                        } else if (splits.length === 3 && splits[1].length === 0) {
                            // range search with second number negative
                            a = -1 * Number.parseInt(splits[2]);
                            b = Number.parseInt(splits[0]);
                        } else if (splits.length === 4 && splits[0].length === 0 && splits[2].length === 0) {
                            // range search with both numbers negative
                            a = -1 * Number.parseInt(splits[0]);
                            b = -1 * Number.parseInt(splits[1]);
                            if (a > b) {
                                const c = b;
                                b = a;
                                a = c;
                            }
                        }
                        const criteriaData = dataElement.criteriaData.get(filterCriteriaKey);
                        if (isNullOrUndefined(criteriaData)) {
                            includeElement = includeElement = false;
                        } else {
                            criteriaData.labels.forEach(label => {
                                const numberValue = Number.parseInt(label.name);
                                if (a <= numberValue && numberValue <= b) {
                                    includeElement = true;
                                }
                            });
                        }
                    }
                    includeData = includeData && includeElement;
                }
            }
            // filter for Label columns
            else {
                // fulfills query if filter set is empty
                let fulfillsField = filterCriteria.andSearch || isNullOrUndefined(filterValueSet) || filterValueSet.size === 0;
                // Check for each value in filter if
                filterValueSet.forEach(filterValue => {
                    // if criteria data has one label
                    let fulfillsQuery = false;
                    const criteriaData = dataElement.criteriaData.get(filterCriteriaKey);
                    if (isNullOrUndefined(criteriaData)) {
                        fulfillsQuery = false;
                    } else {
                        criteriaData.labels.forEach((label, labelKey) => {
                            fulfillsQuery = fulfillsQuery || (labelKey === filterValue)
                        });
                    }

                    if (filterCriteria.andSearch) {
                        fulfillsField = fulfillsField && fulfillsQuery;
                    } else {
                        fulfillsField = fulfillsField || fulfillsQuery;
                    }
                });
                includeData = includeData && fulfillsField;
            }
        });

        if (includeData) {
            const dataElement: DataElement = data[i];
            const criteriaDataArray = [];
            state.currentColumns.forEach(key => {
                criteriaDataArray.push(dataElement.getCriteriaData(decodeURIComponent(key)));
            });
            dataElements.push(criteriaDataArray);
            indexes.push(i);
        }
    });

    if (state.rowIndexes.length !== indexes.length) {
        state.currentChanged = true;
    } else {
        for (let i = 0; i < indexes.length; i++) {
            state.currentChanged = state.currentChanged || indexes[i] === state.rowIndexes[i];
        }
    }
    state.rowIndexes = indexes;
    if (state.currentElements.length !== dataElements.length) {
        state.currentChanged = true;
    } else {
        for (let i = 0; i < dataElements.length; i++) {
            state.currentChanged = state.currentChanged || dataElements[i] === state.currentElements[i];
        }
    }
    state.currentElements = dataElements;
    return state;
}

function sortElements(state: IUCAppState): IUCAppState {
    if (state.currentOrder === null) {
        return state;
    }
    const keys: Array<number> = state.currentOrder.map(value => {
        const key: string = value.substring(1);
        if (state.currentColumns.indexOf(key) !== -1) {
            return state.currentColumns.indexOf(key);
        } else {
            return 0;
        }
    });
    const direction: Array<number> = state.currentOrder.map(key => {
        if (key.startsWith('+')) {
            return 1;
        } else if (key.startsWith('-')) {
            return -1;
        } else {
            // Default is positive (ascending)
            return 1;
        }
    });

    const combined: Array<{
        currentElements: Array<CriteriaData>,
        indexes: number
    }> = [];
    state.currentElements.forEach((value, index) => combined.push({
        currentElements: value,
        indexes: state.rowIndexes[index]
    }));
    combined.sort((a, b) => sort(a.currentElements, b.currentElements, state.columnTypes, keys, direction));
    if (state.currentElements.length !== combined.length) {
        state.currentChanged = true;
    } else {
        for (let i = 0; i < combined.length; i++) {
            state.currentChanged = state.currentChanged ||
                state.currentElements[i] === combined[i].currentElements ||
                state.rowIndexes[i] === combined[i].indexes;
        }
    }
    state.currentElements = combined.map(element => element.currentElements);
    state.rowIndexes = combined.map(element => element.indexes);

    return state;
}

/*
 * Sort two dataElements based on a list of criteria (keys) in ascending/descending (direction) order
 */
function sort(first: Array<CriteriaData>,
              second: Array<CriteriaData>,
              types: Array<CriteriaTypes>,
              keys: Array<number>,
              directions: Array<number>) {
    const stringCompare = (s1: string, s2: string) => {
        if (isNullOrUndefined(s1) && isNullOrUndefined(s2)) {
            return 0;
        }
        if (isNullOrUndefined(s1)) {
            return 1;
        }
        if (isNullOrUndefined(s2)) {
            return -1;
        }
        return s1.toLowerCase() > s2.toLowerCase() ? 1 : s1.toLowerCase() < s2.toLowerCase() ? -1 : 0;
    };
    const numberCompare = (n1: number, n2: number) => n1 > n2 ? 1 : n1 < n2 ? -1 : 0;

    if (isNullOrUndefined(first) && isNullOrUndefined(second) || first.length === 0 && second.length === 0) {
        return 0;
    }
    if (isNullOrUndefined(first) || first.length === 0 && second.length > 0) {
        return -1;
    }
    if (isNullOrUndefined(first) || first.length > 0 && second.length === 0) {
        return 1;
    }

    let result = 0;
    let index = 0;
    while (result === 0 && index < keys.length) {
        const criteriaDataFirst = first[keys[index]];
        const criteriaDataSecond = second[keys[index]];
        if (isNullOrUndefined(criteriaDataFirst) && isNullOrUndefined(criteriaDataSecond)) {
            result = 0;
        } else if (isNullOrUndefined(criteriaDataFirst)) {
            result = 1;
        } else if (isNullOrUndefined(criteriaDataSecond)) {
            result = -1;
        } else {
            switch (types[keys[index]]) {
                case CriteriaTypes.NAME_URL:
                    // TODO
                    result = stringCompare(criteriaDataFirst.name, criteriaDataSecond.name);
                    break;
                case CriteriaTypes.TEXT:
                case CriteriaTypes.MARKDOWN:
                    result = stringCompare(criteriaDataFirst.text, criteriaDataSecond.text);
                    break;
                case CriteriaTypes.RATING:
                    const r1: number = <number>criteriaDataFirst.rating;
                    const r2: number = <number>criteriaDataSecond.rating;
                    result = numberCompare(r1, r2);
                    break;
                case CriteriaTypes.REPOSITORY:
                case CriteriaTypes.LABEL:
                    // TODO improve label sorting (label weighting...)
                    const l1: Label = criteriaDataFirst.getFirstLabel();
                    const l2: Label = criteriaDataSecond.getFirstLabel();
                    if (isNullOrUndefined(l1) && isNullOrUndefined(l2)) {
                        result = 0;
                    } else if (isNullOrUndefined(l1)) {
                        result = 1;
                    } else if (isNullOrUndefined(l2)) {
                        result = -1;
                    } else {
                        result = stringCompare(l1.name, l2.name)
                    }
                    break;
                default:
                    result = 0;
            }
        }
        if (result === 0) {
            index++;
        }
    }
    return directions[index] * result;
}

function routeReducer(state: IUCAppState = new UcAppState(), action: UCRouterAction) {
    if (action.type !== UPDATE_ROUTE) {
        return state;
    }
    const params = action.payload.routerState.queryParams;
    const indices = decodeURIComponent(params.elements || '');
    const search = decodeURIComponent(params.search || params['?search'] || '');
    const filter = decodeURIComponent(params.filter || '');
    const optionsDialog = params.hasOwnProperty('options');
    const columns = params.columns || '';
    const maximized = params.hasOwnProperty('maximized') || params.hasOwnProperty('?maximized');
    const order = decodeURIComponent(params.order || params['?order'] || '+id');
    state.internalLink = params.sectionLink;

    search.split(';').map(x => x.trim()).forEach(x => {
        const splits = x.split(':');
        if (splits.length > 1) {
            // at least one filter is active
            const key = splits.splice(0, 1);
            state.currentSearch.set(key[0], new Set(splits));
        }
    });
    state.currentFilter = filter.split(',')
        .filter(x => x.trim().length > 0)
        .filter(x => Number.isInteger(Number.parseFloat(x.trim())))
        .map(x => Number.parseInt(x.trim()));
    state.currentColumns = columns.split(',')
        .filter(x => x.trim().length > 0);
    if (state.currentColumns.length === 0 && state.criterias) {
        const values = state.criterias.values();
        let crit = values.next().value;
        while (!isNullOrUndefined(crit)) {
            state.currentColumns.push(crit.id);
            crit = values.next().value;
        }
    }
    if (!isNullOrUndefined(indices)) {
        for (let i = 0; i < state.elementsEnabled.length; i++) {
            state.loadedElementsEnabled[i] = false;
        }
        indices.split(';').forEach(i => {
            state.loadedElementsEnabled[i] = true;
        });
    }
    if (params.details) {
        const detailsKey = decodeURIComponent(params.details);

        if (!isNullOrUndefined(detailsKey) && detailsKey.length > 0) {
            state.detailsOpen = true;
            if (isNullOrUndefined(ConfigurationService.data.dataElements) || ConfigurationService.data.dataElements.length === 0) {
                state.detailsData = new DataElement(detailsKey, '', '', new Map());
            } else {
                state.detailsData = searchElement(state, detailsKey);
            }
        }
    }

    state.currentlyMaximized = maximized;
    state.currentOrder = order.split(',');
    return state;
}

function searchElement(state: IUCAppState, detailsKey: string): DataElement {
    for (const element of ConfigurationService.data.dataElements) {
        if (element.name === detailsKey) {
            return element;
        }
    }
}

function filterReducer(state: IUCAppState = new UcAppState(), action: UCAction) {
    return state;
}

function detailsReducer(state: IUCAppState = new UcAppState(), action: UCAction) {
    return state;
}

function searchReducer(state: IUCAppState = new UcAppState(), action: UCSearchUpdateAction) {
    for (const [key, value] of action.criterias) {
        const elements = state.currentSearch.get(key) || new Set<string>();
        if (state.criterias.get(key).rangeSearch) {
            if (isNullOrUndefined(value) || value.length === 0) {
                state.currentSearch.delete(key);
            } else {
                state.currentSearch.set(key, new Set([value]));
            }
        } else {
            if (value !== null && elements.has(value)) {
                elements.delete(value);
            } else if (value !== null) {
                const elements = state.currentSearch.get(key);
                if (isNullOrUndefined(elements)) {
                    state.currentSearch.set(key, new Set([value]));
                } else {
                    elements.add(value);
                }
            }
        }
    }
    return state;
}

function toggleDetailsReducer(state: IUCAppState = new UcAppState(), action: UCDetailsAction) {
    state.detailsOpen = !isNullOrUndefined(action.data);
    if (state.detailsOpen) {
        state.detailsData = action.data;
    }
    return state;
}
