import {bootstrap} from 'angular2/platform/browser'
import {ChatAppComponent} from './chat-app.component'
import {HTTP_PROVIDERS} from 'angular2/http';

bootstrap(ChatAppComponent, [HTTP_PROVIDERS]);