import { RouterStateSerializer } from '@ngrx/router-store';
import { Params, RouterStateSnapshot } from '@angular/router';

export interface RouterStateUrl {
    url: string;
    queryParams: Params;
    sectionLink: string
}

export class CustomRouterStateSerializer implements RouterStateSerializer<RouterStateUrl> {
    serialize(routerState: RouterStateSnapshot): RouterStateUrl {
        let { url } = routerState;
        const queryParams = {};
        let route = routerState.root;

        while (route.firstChild) {
            route = route.firstChild;
        }
        if (url.startsWith('/')) {
            url = url.substr(1);
        }
        if (url.startsWith('#')) {
            url = url.substr(1);
        }
        let sectionLink: string = null;

        for (const u of url.split('&')) {
            const regex = /\??(.+)=(.*)/.exec(u);
            if (regex === null) {
                continue;
            }
            const key = regex[1];
            let value = regex[2];

            if (value.indexOf('#') > -1) {
                [value, sectionLink] = value.split('#');
            }

            let v = value;
            do {
                value = v;
                v = decodeURIComponent(v);
            } while (value !== v);

            queryParams[key] = value;
        }

        return { url, queryParams, sectionLink };
    }

}
