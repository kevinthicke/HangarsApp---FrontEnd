import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { HangarService } from '../../app/core/services/hangar.service';
import { HangarActionTypes, HangarsLoadedAction, LoadHangarsAction } from '../actions/hangar.action';
import { Store } from '@ngrx/store';
import { AppState } from '../state';

@Injectable({
  providedIn: 'root'
})
export class HangarEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private hangarService: HangarService
  ) { }

  @Effect() getHangars$ = this.actions$.pipe(
    ofType(HangarActionTypes.LOAD_HANGARS),
    withLatestFrom(this.store$.select('hangar', 'hangarMinifiedPage', 'totalPages')),
    switchMap(([action, totalPages]: [LoadHangarsAction, number]) => {
      return this.hangarService.getHangars(action.payload);
    }),
    map(hangarMinifiedPage => new HangarsLoadedAction(hangarMinifiedPage))
  );

}
