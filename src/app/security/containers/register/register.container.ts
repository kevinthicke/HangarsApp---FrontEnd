import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../core/services/user.service';
import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../../core/models/authentication/user.model';
import { FormControl, AbstractControl, ValidationErrors } from '@angular/forms';
import { RegisterAsyncValidator } from '../../../shared/validators/register.validator';

@Component({
  selector: 'app-register-container',
  templateUrl: './register.container.html',
  styleUrls: ['./register.container.less']
})
export class RegisterContainer implements OnInit {

  asyncValidationErrors: ValidationErrors | null;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService
  ) { }

  ngOnInit(): void { }

  checkUsernameAsyncValidations(username: AbstractControl): void {

    RegisterAsyncValidator
    .shouldBeUnique(this.userService)(username)
    .then(errors => {
      this.asyncValidationErrors = errors;
    });

  }

  handleRegisterForm(userForm: User) {
    const { username, password } = userForm;

    this.authenticationService
      .register(username, password, '')
      .subscribe(response => {
        this.router.navigate(['login']);
      });
  }


}
