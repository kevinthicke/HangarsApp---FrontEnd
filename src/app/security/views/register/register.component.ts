import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { UserService } from '../../../core/services/user.service';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { RegisterValidator, RegisterAsyncValidator } from '../../../shared/validators/register.validator';

import { User } from '../../../core/models/authentication/user.model';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit, OnChanges {

  @Input() asyncValidationErrors: ValidationErrors | null;

  @Output() formEmitter = new EventEmitter<User>();
  @Output() usernameValueEmitter = new EventEmitter<AbstractControl>();

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group(
      {
        username: [
          '',
          [Validators.required, RegisterValidator.cannotContainsEmptySpace]
        ],
        password: [
          '',
          [ Validators.required, RegisterValidator.isNotSecurePassword ]
        ],
        passwordConfirm: [
          '',
          Validators.required
        ]
      },
      {
        validator: RegisterValidator.mustMatch('password', 'passwordConfirm')
      }
    );

  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes['asyncValidationErrors'] && changes['asyncValidationErrors'].currentValue) {
      this.form.controls['username'].setErrors(this.asyncValidationErrors);
    }

  }

  handleBlur() {
    this.usernameValueEmitter.emit(this.form.controls['username'])
  }

  submit(): void {
    //this.form.controls['username'].setValidators();
    //this.form.controls['username'].setErrors({ shouldBeUnique: true })
    const { username, password } = this.form.controls;
    console.log(this.form.value);
    //this.formEmitter.emit(new User(name.value, password.value));
  }


}
