import { User } from '../../app/core/models/authentication/user.model';

export interface SecurityState {
  user: User;
  isUserLogged: boolean;
  pending: boolean
}