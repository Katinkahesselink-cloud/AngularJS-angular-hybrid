import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnDestroy,
  Output,
  signal
} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule, MatButton } from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import { MatDivider, MatDividerModule } from '@angular/material/divider';
import { MatError, MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInput, MatInputModule } from '@angular/material/input';
import { take } from 'rxjs';

interface AddUserForm {
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  email: FormControl<string>;
}

@Component({
  selector: 'usr-add-user-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatButton,
    MatIconModule,
    MatDividerModule,
    MatFormField,
    MatLabel,
    MatError,
    MatIcon,
    MatDivider,
    MatInput
  ],
  templateUrl: 'modules/user/add-user/add-user-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddUserDialogComponent {
  public readonly dialogTitle = 'Add User';
  public readonly isSubmitting = signal(false);

  public readonly addUserForm = new FormGroup<AddUserForm>({
    firstName: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    lastName: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email]
    })
    // add country
  });

  constructor(private readonly dialogRef: MatDialogRef<AddUserDialogComponent>) {}

  public submit(event?: Event): void {
    // on submit: add data to global data, see edit-user.component.ts for reference
    event?.preventDefault();

    if (this.addUserForm.invalid) {
      this.addUserForm.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);
    const payload = this.addUserForm.getRawValue();
    console.log('Add user payload', payload);
    this.dialogRef.close(payload);
    this.resetForm();
    this.isSubmitting.set(false);
  }

  public cancel(): void {
    this.resetForm();
    this.dialogRef.close();
  }

  public onInput(control: FormControl<string>, value: string): void {
    control.setValue(value);
  }

  private resetForm(): void {
    this.addUserForm.reset({
      firstName: '',
      lastName: '',
      email: ''
    });
  }

  public get firstName(): FormControl<string> {
    return this.addUserForm.controls.firstName;
  }

  public get lastName(): FormControl<string> {
    return this.addUserForm.controls.lastName;
  }

  public get email(): FormControl<string> {
    return this.addUserForm.controls.email;
  }
}

@Component({
  selector: 'usr-add-user-modal',
  standalone: true,
  imports: [MatDialogModule, AddUserDialogComponent],
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModernAddUserComponent implements AfterViewInit, OnDestroy {
  @Output() public readonly closed = new EventEmitter<void>();

  private dialogRef?: MatDialogRef<AddUserDialogComponent>;

  constructor(private readonly dialog: MatDialog) {}

  public ngAfterViewInit(): void {
    this.blurActiveElement();

    this.dialogRef = this.dialog.open(AddUserDialogComponent, {
      width: '640px',
      maxWidth: '95vw',
      disableClose: true,
      autoFocus: true,
      restoreFocus: false
    });

    this.dialogRef
      .afterClosed()
      .pipe(take(1))
      .subscribe(() => {
        this.dialogRef = undefined;
        this.closed.emit();
      });
  }

  public ngOnDestroy(): void {
    this.dialogRef?.close();
  }

  private blurActiveElement(): void {
    const active = document.activeElement as HTMLElement | null;
    active?.blur();
  }
}