import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../../../core/services/user.service';
import { AuthenticationService } from '../../services/authentication.service';
import { RegisterValidators, RegisterAsyncValidators } from '../../validators/register.validators';
import { Role } from '../../../core/models/Role';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
  invalidPassword = false;
  invalidUsername = false;
  securityPassword = '';

  private form: FormGroup;
  private roles: string[];
  private roleSelected: string;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group(
      {
        username: new FormControl(
          '',
          [Validators.required, RegisterValidators.cannotContainsEmptySpace],
          RegisterAsyncValidators.shouldBeUnique(this.userService)
        ),
        password: new FormControl('', [
          Validators.required,
          RegisterValidators.isNotSecurePassword
        ]),
        passwordConfirm: new FormControl('', Validators.required)
      },
      {
        validator: RegisterValidators.mustMatch('password', 'passwordConfirm')
      }
    );

    /*
    this.userService.loadRoles().subscribe(
      (roles: Role[]): void => {
        this.roles = roles.map((role: Role): string => role.role);
      }
    );
    */
  }

  get formFields() {
    return this.form.controls;
  }

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  get passwordConfirm() {
    return this.form.get('passwordConfirm');
  }

  selectRole(role: string) {
    this.roleSelected = role;
  }

  handleSubmit() {
    const { username, password } = this.form.value;

    if (this.form.valid) {
      this.authenticationService
        .register(username, password, this.roleSelected)
        .subscribe(response => {
          this.router.navigate(['login']);
        });
    }
  }
}
