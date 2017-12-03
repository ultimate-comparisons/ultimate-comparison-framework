import { RouterStateSerializer } from '@ngrx/router-store';
import { Params, RouterStateSnapshot } from '@angular/router';
import { IUCAppState } from './app.app-state';
import { processUrl } from './app.url';

export interface RouterStateUrl {
    url: string;
    queryParams: Params;
    params: Params;
}

export class CustomRouterStateSerializer implements RouterStateSerializer<RouterStateUrl> {
    serialize(routerState: RouterStateSnapshot): RouterStateUrl {
        const { url } = routerState;
        const queryParams = routerState.root.queryParams;
        let route = routerState.root;

        while (route.firstChild) {
            route = route.firstChild;
        }

        const params = route.params;

        for (const u of routerState.url.split('&')) {
            if (u.match(/state=.+/)) {
                const state: IUCAppState = <IUCAppState>JSON.parse(decodeURIComponent(u.split('=')[1]));
                processUrl(state);
                break;
            }
        }

        return { url, queryParams, params };
    }

}
