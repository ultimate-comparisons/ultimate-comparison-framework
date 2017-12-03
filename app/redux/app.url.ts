import { IUCAppState, UCAppState } from './app.app-state';
import { INITIAL_STATE } from './app.reducers';

export function processUrl(state: IUCAppState) {
    (<UCAppState>INITIAL_STATE).set(state);
}
