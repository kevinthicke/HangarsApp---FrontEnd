import { HangarActions, HangarActionTypes } from '../actions/hangar.action';
import { HangarState } from '../state/hangar.state';
import { HangarMinifiedPage } from 'src/app/core/models/hangar/paginable-minified-hangar.model';

export const initialState: HangarState = {
  hangarMinifiedPage: new HangarMinifiedPage(),
  hangarSelected: null,
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
        hangarMinifiedPage: action.payload,
        pending: false
      };

    case HangarActionTypes.SET_HANGAR:

      return (state.hangarSelected && (state.hangarSelected.id===action.payload.id))
      ? {
        ...state,
        hangarSelected: null
      }
      : {
        ...state,
        hangarSelected: action.payload
      }

    case HangarActionTypes.LOAD_HANGAR_DETAILS:

      return {
        ...state,
        pending: true
      }

    case HangarActionTypes.HANGAR_DETAILS_LOADED:

      return {
        ...state,
        hangarSelected: action.payload,
        pending: false
      }


    default:
      return state;
  }

}
