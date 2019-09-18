import { HangarState } from '../state/hangar.state';
import { HangarActions, HangarActionTypes } from '../actions/hangar.action';

export const initialState: HangarState = {
  hangars: null,
  hangarsName: [],
  pending: false,
  error: null
};


export function hangarReducer(state: HangarState, action: HangarActions): HangarState {

  switch (action.type) {

    case HangarActionTypes.LOAD_HANGARS:
      return {
        ...state,
        pending: true,
        error: null
      };

    case HangarActionTypes.HANGARS_LOADED:
      return {
        ...state,
        hangars: action.payload,
        pending: false
      };

    case HangarActionTypes.LOAD_HANGARS_NAME:
      return {
        ...state,
        pending: true,
        error: null
      };

    case HangarActionTypes.HANGARS_NAME_LOADED:
      return {
        ...state,
        pending: false,
        hangarsName: action.payload
      };

    default:
      return state;
  }

}
