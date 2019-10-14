import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { User } from '../../app/core/models/authentication/user.model';
import { AuthenticationService } from '../../app/security/services/authentication.service';
import { AuthenticateAction, LoggedInAction, SecurityActions, SecurityActionTypes } from '../actions/security.action';

@Injectable({
  providedIn: 'root'
})
export class SecurityEffects {

  constructor(
    private actions$: Actions,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  @Effect() authenticate$: Observable<SecurityActions> = this.actions$.pipe(
    ofType(SecurityActionTypes.AUTHENTICATE),

    switchMap((action: AuthenticateAction) => {
      return this.authenticationService.authenticate(action.payload).pipe(
        map(({ token }) => {
          let user = new User(action.payload.username, action.payload.password, token);
          return new LoggedInAction(user);
        })
      )
    })
  ); 

  @Effect({ dispatch: false }) isLoggedIn$ = this.actions$.pipe(
    ofType(SecurityActionTypes.LOGGED_IN),
    
    tap((action: LoggedInAction) => {
      sessionStorage.setItem('username', action.payload.username);
      sessionStorage.setItem('token', `Bearer ${ action.payload.token }`);
    }),
    tap(() => this.router.navigate(['']))
  );

  @Effect({ dispatch: false }) logOut$ = this.actions$.pipe(
    ofType(SecurityActionTypes.LOG_OUT),

    tap(() => {
      sessionStorage.removeItem('username')
    }),
    tap(() => {
      this.router.navigate(['logout'])
    })
  );

}
