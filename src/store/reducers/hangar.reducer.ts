import { HangarState } from '../state/hangar.state';
import { HangarActions, HangarActionTypes } from '../actions/hangar.action';
import { PaginableHangar } from 'src/app/core/models/hangar/paginable-hangar.model';

export const initialState: HangarState = {
  hangars: new PaginableHangar(),
  hangarsName: [],
  pending: false,
};


export function hangarReducer(state: HangarState, action: HangarActions): HangarState {

  switch (action.type) {

    case HangarActionTypes.LOAD_HANGARS:
      return {
        ...state,
        pending: true,
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
