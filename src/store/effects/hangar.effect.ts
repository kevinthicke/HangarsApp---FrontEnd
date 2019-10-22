import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, switchMap, withLatestFrom, tap } from 'rxjs/operators';
import { Hangar } from '../../app/core/models/hangar/hangar.model';
import { HangarService } from '../../app/core/services/hangar.service';
import { HangarActions, HangarActionTypes, HangarDetailsLoadedAction, HangarsLoadedAction, LoadHangarsAction } from '../actions/hangar.action';
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

  @Effect() getHangars$: Observable<HangarActions> = this.actions$.pipe(
    ofType(HangarActionTypes.LOAD_HANGARS),

    withLatestFrom(this.store$.select('hangar', 'hangarMinifiedPage', 'totalPages')),
    switchMap(([action, totalPages]: [LoadHangarsAction, number]) => {
      return this.hangarService.getHangars(action.payload);
    }),
    map(hangarMinifiedPage => new HangarsLoadedAction(hangarMinifiedPage))
  );

  @Effect() loadHangarDetails$: Observable<HangarActions> = this.actions$.pipe(
    ofType(HangarActionTypes.LOAD_HANGAR_DETAILS),

    withLatestFrom(this.store$.select('hangar', 'hangarSelected')),
    switchMap(([, hangar]: [void, Hangar]) => this.hangarService.getHangarById(hangar.id)),
    tap(v => console.log(v)),
    map(hangar => new HangarDetailsLoadedAction(hangar))
  );

}
