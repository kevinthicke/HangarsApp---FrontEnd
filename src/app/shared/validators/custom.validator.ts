import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidator {

  static shouldBeGreaterThanZero(control: AbstractControl): ValidationErrors | null {
    return (control.value as number) <= 0
      ? { shouldBeGreaterThanZero: true }
      : null;
  }
  static shouldBeANumber(control: AbstractControl): ValidationErrors | null {

    const parsedValue = Number(control.value as string);
    const isNumber = !isNaN(parsedValue);

    return isNumber
      ? null
      : { shouldBeANumber: true }
  }

}
