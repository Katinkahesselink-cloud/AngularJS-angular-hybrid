---
applyTo: "**/*.services.ts"
---

## Service Registration
Choose the provision strategy based on the service's scope:

*   **Global Services:** For application-wide utilities (e.g., auth, logging), use `@Injectable({ providedIn: 'root' })`.
*   **Feature Services:** For feature-specific logic (e.g., `ShareholderService`), use `@Injectable()` and provide the service at the route level. This ensures encapsulation and automatic state cleanup.

```typescript
// In your feature's route configuration
{
  path: 'my-feature',
  providers: [MyFeatureService],
  // ...
}
```

## HTTP Methods & Response Handling
All new service methods performing HTTP requests **must** return an `Observable`. Do not create new `Promise`-based or overloaded methods.

## Naming and Typing
Adhere strictly to existing conventions: `IPrefixedInterfaces`, `PascalCaseService` classes, and `kebab-case.service.ts` filenames, add the suffix *DTO* for API models.
