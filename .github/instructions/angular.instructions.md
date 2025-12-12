---
applyTo: "ars/ars-web/**/*"
---

## Architecture

This project is a hybrid application built with a modern **Angular 17* frontend and a legacy AngularJS core.
The two frameworks coexist using the `@angular/upgrade` library, which allows for incremental migration. Our strategy is to follow the *"strangler fig"* pattern: new features are built exclusively with modern Angular, while existing legacy parts are progressively refactored and replaced over time. The ultimate goal is to fully migrate to a performant, maintainable, and module-less Angular codebase.


## Styling & UI Components

The project's visual layer is built on an older version of Bootstrap. All styling is handled globally to ensure a consistent look and feel.

*   **Bootstrap Framework:** All new UI elements and components, particularly those intended for reuse in the `shared/` directory, **must** be implemented using standard Bootstrap classes and patterns.
*   **No Component Styles:** Do not use the `styleUrls` property in components. All styles are managed in the global `styles.scss` file.

- **Code Translations:** For retrieving translated strings within component or service logic, inject the `I18nService` and use its `getMessage` method.

```typescript
export class MyComponent {
  private readonly i18n = inject(I18nService);

  public getMessage(): string {
    return this.i18n.getMessage('web.my.component.message.key');
  }

  // Alternatively, you can use the translate pipe to get the translated value.
  // Ensure that the TranslatePipe is listed in the component's
  // providers array within the @Component decorator.
  public getTranslation(): string {
    return this.translate.transform('web.my.component.message.key');
  }
}
```

