import { Action } from '@ngrx/store';
import { HangarMinified } from '../../app/core/models/hangar/hangar-minified.model';
import { HangarMinifiedPage } from '../../app/core/models/hangar/paginable-minified-hangar.model';
import { Hangar } from '../../app/core/models/hangar/hangar.model';


export enum HangarActionTypes {

  LOAD_HANGARS = '[HANGAR] LOAD_HANGARS',
  HANGARS_LOADED = '[HANGAR] HANGARS_LOADED',

  SET_HANGAR = '[HANGAR] SET_HANGAR',

  LOAD_HANGAR_DETAILS = '[HANGAR] LOAD_HANGAR_DETAILS',
  HANGAR_DETAILS_LOADED = '[HANGAR] HANGAR_DETAILS_LOADED'

}

export class LoadHangarsAction implements Action {
  readonly type = HangarActionTypes.LOAD_HANGARS;

  constructor(public payload: number) { }
}

export class HangarsLoadedAction implements Action {
  readonly type = HangarActionTypes.HANGARS_LOADED;

  constructor(public payload: HangarMinifiedPage) { }
}

export class SetHangarSelectedAction implements Action {
  readonly type = HangarActionTypes.SET_HANGAR;

  constructor(public payload: Hangar) { }
}

export class LoadHangarDetailsAction implements Action {
  readonly type = HangarActionTypes.LOAD_HANGAR_DETAILS;
}

export class HangarDetailsLoadedAction implements Action {
  readonly type = HangarActionTypes.HANGAR_DETAILS_LOADED;

  constructor(public payload: Hangar) { }
}


export type HangarActions = (
  LoadHangarsAction |
  HangarsLoadedAction |
  SetHangarSelectedAction |
  LoadHangarDetailsAction |
  HangarDetailsLoadedAction
);
