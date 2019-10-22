import { Action } from '@ngrx/store';
import { HangarMinified } from '../../app/core/models/hangar/hangar-minified.model';
import { HangarMinifiedPage } from '../../app/core/models/hangar/paginable-minified-hangar.model';


export enum HangarActionTypes {

  LOAD_HANGARS = '[HANGAR] LOAD_HANGARS',
  HANGARS_LOADED = '[HANGAR] HANGARS_LOADED',

  SET_HANGAR = '[HANGAR] SET_HANGAR'

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

  constructor(public payload: HangarMinified) { }
}


export type HangarActions = (
  LoadHangarsAction |
  HangarsLoadedAction |
  SetHangarSelectedAction
);
