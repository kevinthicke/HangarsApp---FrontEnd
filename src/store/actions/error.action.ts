import { Action } from '@ngrx/store';
import { Error } from 'src/app/core/models/auxiliary/error.model';

export enum ErrorActionTypes {
  RENDERIZE_ERROR = '[ERROR] RENDERIZE_ERROR',
  UNRENDERIZE_ERROR = '[ERROR] UNRENDERIZE_ERROR'
}

export class RenderizeErrorAction implements Action {
  readonly type = ErrorActionTypes.RENDERIZE_ERROR;

  constructor(public payload: Error) { }
}

export class UnrenderizeErrorAction implements Action {
  readonly type = ErrorActionTypes.UNRENDERIZE_ERROR;

  constructor() { }
}


export type ErrorActions = (
  RenderizeErrorAction |
  UnrenderizeErrorAction
);

