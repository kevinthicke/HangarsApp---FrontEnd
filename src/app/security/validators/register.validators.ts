import { AbstractControl, FormGroup, ValidationErrors } from "@angular/forms";
import { UserService } from '../../core/services/user.service';

export class RegisterValidators {
  static isNotSecurePassword(control: AbstractControl) {
    let strangeCharacters = '!"·$%&/()=?¿|@#~€¬';
    let isNotSecurePassword = true;

    strangeCharacters.split("").forEach(
      (character: string): void => {
        if ((control.value as string).includes(character)) {
          isNotSecurePassword = false;
        }
      }
    );

    return isNotSecurePassword ? { isNotSecurePassword } : null;
  }

  static cannotContainsEmptySpace(control: AbstractControl) {
    return (control.value as string).includes(" ")
      ? { cannotContainsEmptySpace: true }
      : null;
  }

  static mustMatch(controlName: string, matchingControlName: string ): ValidationErrors | null {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
}

export class RegisterAsyncValidators {
  static shouldBeUnique(userService: UserService) {
    return (control: AbstractControl): Promise<ValidationErrors | null> =>
      new Promise((resolve, reject) => {
        userService
          .existUserByUsername(control.value as string)
          .subscribe(response => {
            if (response) {
              resolve({ shouldBeUnique: true });
            } else {
              resolve(null);
            }
          });
      });
  }
}
