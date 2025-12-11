import {Component, computed, Signal} from "@angular/core";
import {ActivatedRoute, UrlSegment} from "@angular/router";
import {toSignal} from "@angular/core/rxjs-interop";

@Component({
    selector: 'route',
    standalone: true,
    imports: [],
    template: "<div style='padding: 10px; background-color: lightgreen; margin-bottom: 5px'> router-outlet: /{{path()}} (Angular)</div>"
})
export class RouteComponent {
    private urlSignal: Signal<UrlSegment[] | undefined>;
    protected path: Signal<string | undefined> = computed(() => {
        const url = this.urlSignal()
        if (url) {
            const [firstSegment] = url

            return firstSegment?.path
        } else return undefined
    })

    constructor(activatedRoute: ActivatedRoute) {
        this.urlSignal = toSignal(activatedRoute.url)
    }
}

@Component({
    selector: 'route',
    standalone: true,
    imports: [],
    template: ""
})

export class EmptyComponent  {

}