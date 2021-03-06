import { Criteria, CriteriaData, CriteriaTypes, DataElement } from '../../../lib/gulp/model/model.module';

export interface IUCAppState {
    /**
     * Which criteria has to fulfill which condition (set at the top of the page in the boxes)
     */
    currentSearch: Map<string, Set<string>>;

    /**
     * Which element's details page should be shown. -1 if none.
     * Index of the element in the data array (DataService.data: Array<Data>)
     */
    currentDetails: number;

    /**
     * Which elements are disabled.
     * Index of the elements in the data array (DataService.data: Array<Data>)
     */
    currentFilter: Array<number>;

    /**
     * Which columns are shown.
     * Keys of the columns (criteria: Map<string, Criteria>)
     */
    currentColumns: Array<string>;

    /**
     * Determines if the table is maximized (all columns are shown) if it is minimized afterwards, it returns to {@see #currentColumns}.
     */
    currentlyMaximized: boolean;

    /**
     * Which columns determine the order of the elements. '-' means descending, '+' ascending.
     * Keys of the columns (criteria: Map<string, Criteria>) with '+'|'-' prefix
     */
    currentOrder: Array<string>;

    /**
     * Current uc configuration
     * Used for currentColumns|currentOrder
     */
    criterias: Map<string, Criteria>;

    /**
     * List of columns that should be shown.
     */
    currentColumnNames: Array<string>;

    /**
     * List of the CriteriaTypes of the columns
     */
    columnTypes: Array<CriteriaTypes>;

    /**
     * List of column order ( 1 = ascending, -1 = descending)
     */
    columnOrder: Array<number>;

    /**
     * List of row indexes
     */
    rowIndexes: Array<number>;

    /**
     * Which elements should be shown after the filter and the search are applied.
     */
    currentElements: Array<Array<CriteriaData>>;

    /**
     * True if one of the current* properties was changed
     */
    currentChanged: boolean;

    /**
     * Settings
     */
    elementNames: Array<string>;
    elementsEnabled: Array<boolean>;
    loadedElementsEnabled: Array<boolean>;
    elementDisplayAll: boolean;

    columnKeys: Array<string>;
    columnNames: Array<string>;
    columnsEnabled: Array<boolean>;
    columnsEnabledCache: Array<boolean>;
    columnDisplayAll: boolean;

    latexDisplayTable: boolean;
    latexEnableTooltips: boolean;
    latexTooltipsAsFootnotes: boolean;

    detailsOpen: boolean;
    detailsData: DataElement;

    detailsDisplayTooltips: boolean;

    tableExpand: boolean;
    currentSaved: boolean;

    internalLink: string;
}

export class UcAppState implements IUCAppState {
    currentSaved = false;
    elementNames: Array<string> = [];
    elementsEnabled: Array<boolean> = [];
    loadedElementsEnabled = [];
    elementDisplayAll = false;

    columnKeys: Array<string> = [];
    columnNames: Array<string> = [];
    columnsEnabled: Array<boolean> = [];
    columnsEnabledCache: Array<boolean> = [];
    columnDisplayAll = false;

    latexDisplayTable = false;
    latexEnableTooltips = false;
    latexTooltipsAsFootnotes = false;

    detailsOpen = false;
    detailsData = null;

    detailsDisplayTooltips = false;

    tableExpand = false;

    currentSearch: Map<string, Set<string>> = new Map<string, Set<string>>();
    currentDetails = -1;
    currentFilter: Array<number> = [];
    currentColumns: Array<string> = [];
    currentlyMaximized = false;
    currentOrder = ['+id'];
    criterias: Map<string, Criteria> = null;
    currentColumnNames: Array<string> = [];
    columnTypes: Array<CriteriaTypes> = [];
    columnOrder: Array<number> = [];
    rowIndexes: Array<number> = [];
    currentElements: Array<Array<CriteriaData>> = [];
    currentChanged = false;

    internalLink = '';
}
