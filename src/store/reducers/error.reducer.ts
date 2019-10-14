import { ErrorActions, ErrorActionTypes } from '../actions/error.action';
import { ErrorState } from '../state/error.state';

const initialState: ErrorState = {
  error: null
}

export function errorReducer(state: ErrorState = initialState, action: ErrorActions): ErrorState {

  switch (action.type) {
    case ErrorActionTypes.RENDERIZE_ERROR:
      return {
        ...state,
        error:  action.payload
      };

    case ErrorActionTypes.UNRENDERIZE_ERROR:
      return {
        ...state,
        error: null
      };


    default: 
      return state;
  }

}