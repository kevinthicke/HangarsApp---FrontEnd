import { HangarState } from '../state/hangar.state';
import { HangarActions, HangarActionTypes } from '../actions/hangar.action';

export const initialState: HangarState = {
  hangars: null,
  pending: false,
  error: null
};


export function hangarReducer(state: HangarState, action: HangarActions) {

  switch (action.type) {

    case HangarActionTypes.GET_HANGARS:
      return {
        ...state,
        pending: true,
        error: null
      };

    case HangarActionTypes.GET_HANGARS_SUCCESS:
      return {
        ...state,
        hangars: action.payload,
        peding: false
      };

    case HangarActionTypes.GET_HANGARS_ERROR:
      return {
        ...state,
        peding: false,
        error: 'ERROR!'
      };
  }

}
