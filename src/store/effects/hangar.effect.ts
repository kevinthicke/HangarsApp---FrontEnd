import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, switchMap, withLatestFrom, tap } from 'rxjs/operators';
import { Hangar } from '../../app/core/models/hangar/hangar.model';
import { HangarService } from '../../app/core/services/hangar.service';
import { HangarActions, HangarActionTypes, HangarDetailsLoadedAction, HangarsLoadedAction, LoadHangarsAction, ChangeHangarSelectedAction, SetHangarSelectedAction, UpdateHangarAction, SaveHangarAction, ManageInsertHangarAction } from '../actions/hangar.action';
import { AppState } from '../state';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HangarEffects {

  constructor(
    private router: Router,
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

   @Effect() changeHangarSelected$: Observable<HangarActions> = this.actions$.pipe(
    ofType(HangarActionTypes.CHANGE_HANGAR_SELECTED),

    withLatestFrom(this.store$.select('hangar', 'hangarSelected')),
    map(([action, hangar]: [ChangeHangarSelectedAction, Hangar]) => {

      let hangarSelectedIdsMatch: boolean = true;
      hangarSelectedIdsMatch = hangar && (action.payload.id===hangar.id);

      return (!hangarSelectedIdsMatch)
        ? new SetHangarSelectedAction(action.payload)
        : new SetHangarSelectedAction(null);
    })
  );


  @Effect() manageInsertProduct$: Observable<UpdateHangarAction | SaveHangarAction> = this.actions$.pipe(
    ofType(HangarActionTypes.MANAGE_INSERT_HANGAR),

    withLatestFrom(this.store$.select('router', 'state', 'url')),
    map(([action, url]: [ManageInsertHangarAction, string]) => {

      if (url.includes('modify')) {
        return new UpdateHangarAction(action.payload);
      }

      if (url.includes('insert')) {
        return new SaveHangarAction(action.payload);
      }

    })
  )

  @Effect({ dispatch: false }) saveHangar$ = this.actions$.pipe(
    ofType(HangarActionTypes.SAVE_HANGAR),

    switchMap((action: SaveHangarAction) => this.hangarService.postHangar(action.payload)),
    tap(() => this.router.navigate(['hangars']))
  );

}
