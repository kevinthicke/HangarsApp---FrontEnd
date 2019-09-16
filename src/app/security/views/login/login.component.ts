import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { fade } from '../../../shared/animations/fade.animation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  animations: [ fade ]
})
export class LoginComponent implements OnInit {

  private form = new FormGroup({
    'username': new FormControl(''),
    'password': new FormControl('')
  });

  constructor(private authenticationService: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
  }

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  handleSubmit() {
    const { username, password } = this.form.value;

    this.authenticationService.authenticate(username, password).subscribe(resp => {

      if(resp.token) {
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('token', `Bearer ${ resp.token }`);
        this.router.navigate(['']);
      }
    });
  }

  goCreateAccount() {
    this.router.navigate(['register']);
  }

}
