import {Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    standalone: true,
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    template: `
        <router-outlet></router-outlet>
        <app></app>
    `
})
export class AppComponent {}
