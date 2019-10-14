import { Injectable } from '@angular/core';
import { AppState } from '../state';
import { Store } from '@ngrx/store';
import { User } from '../../app/core/models/authentication/user.model';
import { AuthenticateAction, LogOutAction } from '../actions/security.action';

@Injectable({
  providedIn: 'root'
})
export class SecurityFacade {

  constructor(private store$: Store<AppState>) { }

  authenticate(user: User): void {
    this.store$.dispatch(new AuthenticateAction(user));
  }

  logOut(): void {
    this.store$.dispatch(new LogOutAction());
  }

}