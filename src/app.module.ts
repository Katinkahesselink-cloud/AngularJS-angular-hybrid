import {ApplicationRef, DoBootstrap, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {UpgradeModule} from '@angular/upgrade/static';
import {RouterModule} from "@angular/router";
import {AppComponent} from './app.component';
import {EmptyComponent, RouteComponent} from "./route.component";
@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            {path: '', component: EmptyComponent, pathMatch: 'full'},
            {path: 'route1', component: RouteComponent},
            {path: 'route2', component: RouteComponent},
            {path: 'route3', component: RouteComponent},
            {path: 'route4', component: EmptyComponent},
        ], {
            useHash: false,
            enableTracing: false

        }),
        UpgradeModule,
    ],
    declarations: [],
    exports: [RouterModule],
})

export class AppModule implements DoBootstrap {
    constructor(private upgrade: UpgradeModule) {
    }

    ngDoBootstrap(appRef: ApplicationRef) {
        appRef.bootstrap(AppComponent);
        this.upgrade.bootstrap(document.body, ['UsersApp']);
        console.log("AngularJS bootstrapped!")
    }
}