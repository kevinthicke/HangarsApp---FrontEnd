
import { SecurityActions, SecurityActionTypes } from '../actions/security.action';
import { SecurityState } from '../state/security.state';

const initialState: SecurityState = {
  user: null,
  isUserLogged: false,
  pending: false
}

export function securityReducer(state: SecurityState = initialState, action: SecurityActions): SecurityState {

  switch (action.type) {
    
    case SecurityActionTypes.AUTHENTICATE:
      return {
        ...state,
        pending: true
      };
    
    case SecurityActionTypes.LOGGED_IN:
      return {
        ...state,
        isUserLogged: true,
        user: action.payload,
        pending: false
      };
    
    case SecurityActionTypes.LOG_OUT:
      return { 
        ...state,
        isUserLogged: false,
        user: null
      }

    default: 
      return state;
  }
}