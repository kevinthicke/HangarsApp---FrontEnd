import { Action } from '@ngrx/store';
import { Page } from 'src/app/core/models/page.model';
import { Hangar } from 'src/app/core/models/hangar.model';


export enum HangarActionTypes {
  GET_HANGARS = '[HANGAR] GET_HANGARS',
  GET_HANGARS_SUCCESS = '[HANGAR] GET_HANGARS_SUCCESS',
  GET_HANGARS_ERROR = '[HANGAR] GET_HANGARS_ERROR'
}

export class GetHangarsAction implements Action {
  readonly type = HangarActionTypes.GET_HANGARS;

  // constructor(public payload: any) { }
}

export class GetHangarsSuccessAction implements Action {
  readonly type = HangarActionTypes.GET_HANGARS_SUCCESS;

  constructor(public payload: Page<Hangar>) { }
}

export class GetHangarsErrorAction implements Action {
  readonly type = HangarActionTypes.GET_HANGARS_ERROR;
}

export type HangarActions = GetHangarsAction | GetHangarsSuccessAction | GetHangarsErrorAction;
