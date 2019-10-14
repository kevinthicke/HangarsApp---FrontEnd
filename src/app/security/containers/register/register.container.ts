import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../core/services/user.service';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-register-container',
  templateUrl: './register.container.html',
  styleUrls: ['./register.container.less']
})
export class RegisterContainer implements OnInit {

  constructor(
    private router: Router,
    private userService: UserService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void { }

}
