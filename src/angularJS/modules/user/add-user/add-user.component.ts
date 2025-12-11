import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'modern-add-user',
  standalone: true,
  template: `<div class="modern-add-user-card">Modern Angular Component</div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModernAddUserComponent {}