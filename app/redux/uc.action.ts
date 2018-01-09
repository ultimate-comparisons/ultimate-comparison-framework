import { Action } from '@ngrx/store';
import { UPDATE_DATA, UPDATE_ORDER } from './uc.reducers';
import { Criteria } from '../components/comparison/components/configuration/configuration';

export class UCAction implements Action {
    type: string;
    value: number;
}

export class UCRouterAction extends UCAction {
    payload: any;
}

export class UCDataUpdateAction extends UCAction {
    type = UPDATE_DATA;

    constructor(public criterias: Map<string, Criteria>) {
        super();
    }
}

export class UCTableOrderAction extends UCAction {
    type = UPDATE_ORDER;

    constructor(public index: number, public ctrl: boolean) {
        super();
    }
}
