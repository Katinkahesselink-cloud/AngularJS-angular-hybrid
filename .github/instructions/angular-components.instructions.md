---
applyTo: "*.component.ts"
---

## Component Definition & Metadata

### 1.1. Core Metadata
-   **Standalone:** All components must be `standalone: true`. Dependencies must be declared in the `imports` array.
-   **Change Detection:** The strategy must be `ChangeDetectionStrategy.OnPush`.

```typescript
@Component({
  selector: 'usr-feature-name',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './feature-name.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureNameComponent {
  // ...
}
```

### 1.2. Selector Naming
Component selectors must be prefixed with `usr-` and use kebab-case.

-   **Format:** `usr-feature-or-component-name`
-   **Example:** `usr-shareholder-details-form`

## State Management

Use a hybrid approach for state management. Choose the tool based on the nature of the state.

### 2.1. Component-Local State
Use **Angular Signals** for managing synchronous, local UI state. This includes visibility toggles, form state flags, and counters.

```typescript
@Component({ /* ... */ })
export class MyComponent {
  public readonly isPanelVisible = signal(false);

  public togglePanel(): void {
    this.isPanelVisible.update(visible => !visible);
  }
}
```

### 2.2. Asynchronous Data
Use **RxJS Observables** for handling asynchronous data streams, such as HTTP requests and route parameter changes. Observables must be suffixed with a `$`.

-   **Template Subscriptions:** Always prefer the `async` pipe in templates for automatic subscription management.
-   **Manual Subscriptions:** If manual subscription is unavoidable, stream completion **must** be guaranteed. Use operators like `take(1)`, `first()`, or a `takeUntil(this.destroy$)` pattern to prevent memory leaks.

```typescript
@Component({ /* ... */ })
export class MyComponent implements OnInit {
  private readonly dataService = inject(DataService);

  public readonly data$ = this.dataService.someMethod().pipe(
    // Additionally state here some operator methods
  );
}
```

## Component Class Implementation

### 3.1. Member Visibility
Member visibility (`public`, `private`) must be explicitly defined. Use `readonly` for injected dependencies and properties that are not reassigned.

-   `public`: For all properties and methods accessed by the component's template.
-   `private`: For internal logic, state, and dependencies not used in the template.

### 3.2. Forms
All new forms **must** be strongly typed. Instantiate forms directly on class properties using `new FormGroup()`.

```typescript
interface MyForm {
  name: FormControl<string | null>;
}

@Component({ /* ... */ })
export class MyFormComponent {
  public myForm = new FormGroup<MyForm>({
    name: new FormControl('', Validators.required)
  });
}
```

## Inputs & Outputs

### 4.1. Inputs
Use the `{ required: true }` option for any `@Input` that is essential for the component's core functionality.

```typescript
@Component({ /* ... */ })
export class DetailComponent {
  @Input({ required: true }) customerId: string;
}
```

### 4.2. Outputs
Name `@Output` properties as verbs describing the event. Do not use prefixes like `on`.

-   **Good:** `itemSelected`, `formSubmitted`
-   **Bad:** `onItemSelected`, `submitEvent`

```typescript
@Component({ /* ... */ })
export class ActionButtonComponent {
  @Output() actionCompleted = new EventEmitter<void>();
}
```
