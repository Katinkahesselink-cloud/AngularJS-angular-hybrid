import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, RouterLink],
    standalone: true,
    template: `
        <header style="padding: 12px; background:#f5f5f5; border-bottom:1px solid #ddd;">
            <strong>Hybrid Angular (v17) + AngularJS (v1.8.3)</strong>
            <nav style="margin-top:8px; display:block;">
                <a href="/route1" routerLink="route1" style="margin-right: 12px;">Route 1</a>
                <a href="/route2" routerLink="route2" style="margin-right: 12px;">Route 2</a>
                <a href="/route3" routerLink="route3" style="margin-right: 12px;">Route only known in Angular</a>
                <a href="/route4" routerLink="route4">Route only known in AngularJS</a>
            </nav>
        </header>
        <main style="padding:16px;">
            <div>
                <router-outlet></router-outlet>
                <div ng-view></div>
            </div>
        </main>
    `
})
export class AppComponent {}
