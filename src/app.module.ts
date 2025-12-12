import {ApplicationRef, DoBootstrap, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UpgradeModule} from '@angular/upgrade/static';
import {RouterModule} from "@angular/router";
import {AppComponent} from './app.component';
import {EmptyComponent, RouteComponent} from "./route.component";
import { ModernAddUserComponent } from './angularJS/modules/user/add-user/add-user.component';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
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
        ModernAddUserComponent
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