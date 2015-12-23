import {
    Component,
    View,
    provide
} from "angular2/core";

import {bootstrap} from "angular2/platform/browser";

import {
    RouteConfig,
    RouterLink,
    RouterOutlet,
    Route,
    ROUTER_DIRECTIVES,
    ROUTER_PROVIDERS,
    Location,
    LocationStrategy,
    HashLocationStrategy,
    Router
} from 'angular2/router';

import { DefaultPage } from './default/default';

@Component({
    selector: "my-app",
    templateUrl: "./app/app.html",
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    { path: "/", as: "Default", component: DefaultPage },
])

class App {

    router: Router;
    location: Location;

    constructor(router: Router, location: Location) {
        this.router = router;
        this.location = location;
    }

}

bootstrap(App, [ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);
