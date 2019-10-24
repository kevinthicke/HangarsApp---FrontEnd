import { Action } from '@ngrx/store';
import { HangarMinified } from '../../app/core/models/hangar/hangar-minified.model';
import { HangarMinifiedPage } from '../../app/core/models/hangar/paginable-minified-hangar.model';
import { Hangar } from '../../app/core/models/hangar/hangar.model';


export enum HangarActionTypes {

  LOAD_HANGARS = '[HANGAR] LOAD_HANGARS',
  HANGARS_LOADED = '[HANGAR] HANGARS_LOADED',

  CHANGE_HANGAR_SELECTED = '[HANGAR] CHANGE_HANGAR_SELECTED',
  SET_HANGAR = '[HANGAR] SET_HANGAR',

  LOAD_HANGAR_DETAILS = '[HANGAR] LOAD_HANGAR_DETAILS',
  HANGAR_DETAILS_LOADED = '[HANGAR] HANGAR_DETAILS_LOADED',

  MANAGE_INSERT_HANGAR = '[HANGAR] MANAGE_INSERT_HANGAR',

  SAVE_HANGAR = '[HANGAR] SAVE',
  UPDATE_HANGAR = '[HANGAR] UPDATE'

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

export class ChangeHangarSelectedAction implements Action {
  readonly type = HangarActionTypes.CHANGE_HANGAR_SELECTED;

  constructor(public payload: Hangar) { }
}

export class SaveHangarAction implements Action {
  readonly type = HangarActionTypes.SAVE_HANGAR;

  constructor(public payload: Hangar) { }
}

export class UpdateHangarAction implements Action {
  readonly type = HangarActionTypes.UPDATE_HANGAR;

  constructor(public payload: Hangar) { }
}

export class ManageInsertHangarAction implements Action {
  readonly type = HangarActionTypes.MANAGE_INSERT_HANGAR;

  constructor(public payload: Hangar) { }
}

export type HangarActions = (
  LoadHangarsAction |
  HangarsLoadedAction |
  ChangeHangarSelectedAction |
  SetHangarSelectedAction |
  LoadHangarDetailsAction |
  HangarDetailsLoadedAction |
  SaveHangarAction |
  UpdateHangarAction |
  ManageInsertHangarAction
);
