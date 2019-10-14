import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs/operators';
import { HangarMinified } from '../../app/core/models/hangar/hangar-minified.model';
import { HangarService } from '../../app/core/services/hangar.service';
import { HangarActionTypes, HangarsLoadedAction, HangarsNameLoadedAction } from '../actions/hangar.action';

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

    switchMap(() => this.hangarService.getHangars()),
    map(hangars => new HangarsLoadedAction(hangars))
  );

  @Effect() getHangarsName$ = this.actions$.pipe(
    ofType(HangarActionTypes.LOAD_HANGARS_NAME),
    switchMap(
      action => this.hangarService.getHangarsNames().pipe(
        map((hangarsName: HangarMinified[]) => new HangarsNameLoadedAction(hangarsName))
      )
    )
  );

}
