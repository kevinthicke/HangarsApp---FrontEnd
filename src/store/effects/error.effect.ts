import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';
import { ErrorActionTypes, UnrenderizeErrorAction } from '../actions/error.action';

@Injectable({
  providedIn: 'root'
})
export class ErrorEffects {

  constructor(private actions$: Actions) { }

  @Effect() renderizeError: Observable<any> = this.actions$.pipe(
    ofType(ErrorActionTypes.RENDERIZE_ERROR),

    switchMap(() => {
      return of(new UnrenderizeErrorAction()).pipe(delay(6000))
    })
  );

}