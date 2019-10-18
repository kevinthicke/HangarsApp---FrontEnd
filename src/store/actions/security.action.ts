import { User } from '../../app/core/models/authentication/user.model';
import { Action } from '@ngrx/store';

export enum SecurityActionTypes {

  AUTHENTICATE = '[SECURITY] AUTHENTICATE',

  LOGGED_IN = '[SECURITY] LOGGED_IN',
  LOG_OUT = '[SECURITY] LOG_OUT',

  LOAD_USERNAME = '[SECURITY] LOAD_USERNAME'

}

export class AuthenticateAction implements Action {
  readonly type = SecurityActionTypes.AUTHENTICATE;

  constructor(public payload: User) { }
}

export class LoggedInAction implements Action {
  readonly type = SecurityActionTypes.LOGGED_IN;

  constructor(public payload: User) { }
}

export class LogOutAction implements Action {
  readonly type = SecurityActionTypes.LOG_OUT;
}


export type SecurityActions = (
  AuthenticateAction |
  LoggedInAction |
  LogOutAction
);
