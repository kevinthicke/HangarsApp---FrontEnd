import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { fade } from '../../../shared/animations/fade.animation';
import { User } from '../../../core/models/authentication/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  animations: [ fade ]
})
export class LoginComponent implements OnInit {

  @Output() loginFormEmitter = new EventEmitter<User>();

  form: FormGroup;

  constructor() { }

  ngOnInit(): void {

    this.form = new FormGroup({
      'username': new FormControl(''),
      'password': new FormControl('')
    });

  }

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  submit(): void {
    this.loginFormEmitter.emit(this.form.value);
  }

}
