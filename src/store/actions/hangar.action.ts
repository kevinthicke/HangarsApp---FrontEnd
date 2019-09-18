import { Action } from '@ngrx/store';
import { Page } from 'src/app/core/models/page.model';
import { Hangar } from 'src/app/core/models/hangar.model';


export enum HangarActionTypes {

  LOAD_HANGARS = '[HANGAR] LOAD_HANGARS',
  HANGARS_LOADED = '[HANGAR] HANGARS_LOADED',

  LOAD_HANGARS_NAME = '[HANGAR] LOAD_HANGARS_NAME',
  HANGARS_NAME_LOADED = '[HANGAR] HANGARS_NAME_LOADED'

}

export class LoadHangarsAction implements Action {
  readonly type = HangarActionTypes.LOAD_HANGARS;
}

export class HangarsLoadedAction implements Action {
  readonly type = HangarActionTypes.HANGARS_LOADED;

  constructor(public payload: Page<Hangar>) { }
}

export class LoadHangarsNameAction implements Action {
  readonly type = HangarActionTypes.LOAD_HANGARS_NAME;
}

export class HangarsNameLoadedAction implements Action {
  readonly type = HangarActionTypes.HANGARS_NAME_LOADED;

  constructor(public payload: string[]) { }
}


export type HangarActions = (
  LoadHangarsAction |
  HangarsLoadedAction |
  LoadHangarsNameAction |
  HangarsNameLoadedAction);
