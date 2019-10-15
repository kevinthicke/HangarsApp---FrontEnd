import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidator {

  static shouldBeGreaterThanZero(control: AbstractControl): ValidationErrors | null {
    return (control.value as number) <= 0
      ? { shouldBeGreaterThanZero: true }
      : null;
  }

}
