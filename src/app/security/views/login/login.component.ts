import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../core/models/authentication/user.model';
import { fade } from '../../../shared/animations/fade.animation';

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
      'username': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
    });

  }

  submit(): void {
    this.loginFormEmitter.emit(this.form.value);
  }

}
