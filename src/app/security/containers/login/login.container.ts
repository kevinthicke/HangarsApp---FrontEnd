import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RouterStateUrl } from '../../../../store/state/router.state';
import { SecurityFacade } from '../../../../store/facades/security.facade';
import { RouterFacade } from '../../../../store/facades/router.facade';
import { User } from '../../../core/models/authentication/user.model';

@Component({
  selector: 'app-login-container',
  templateUrl: './login.container.html',
  styleUrls: ['./login.container.less']
})
export class LoginContainer implements OnInit {

  error$: Observable<Error>
  router$: Observable<RouterStateUrl>

  constructor(
    private securityFacade: SecurityFacade,
    private routerFacade: RouterFacade
  ) { }

  ngOnInit(): void {
    this.router$ = this.routerFacade.router$;
  }

  handleLoginForm(form: User): void {
    this.securityFacade.authenticate(form);
  }


}
