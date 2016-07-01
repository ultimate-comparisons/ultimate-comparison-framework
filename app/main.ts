import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { MODAL_BROWSER_PROVIDERS } from 'angular2-modal/src/components/angular2-modal/platform-browser/index';

bootstrap(AppComponent, [...MODAL_BROWSER_PROVIDERS]);