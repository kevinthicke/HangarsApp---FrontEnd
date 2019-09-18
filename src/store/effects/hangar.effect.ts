import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { HangarService } from '../../app/core/services/hangar.service';
import { HangarActionTypes, HangarsLoadedAction, HangarsNameLoadedAction } from '../actions/hangar.action';
import { switchMap, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HangarEffects {

  constructor(
    private actions$: Actions,
    private hangarService: HangarService
  ) { }

  @Effect() getHangars$ = this.actions$.pipe(
    ofType(HangarActionTypes.LOAD_HANGARS),
    switchMap(
      action => this.hangarService.getHangars().pipe(
        map(hangars => new HangarsLoadedAction(hangars))
      )
    )
  );

  @Effect() getHangarsName$ = this.actions$.pipe(
    ofType(HangarActionTypes.LOAD_HANGARS_NAME),
    switchMap(
      action => this.hangarService.getHangarsNames().pipe(
        map((hangarsName: string[]) => new HangarsNameLoadedAction(hangarsName))
      )
    )
  );

}
