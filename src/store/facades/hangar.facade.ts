import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Hangar } from 'src/app/core/models/hangar/hangar.model';
import { HangarAdapter } from '../../app/core/models/auxiliary/adapters/hangar.adapter';
import { HangarBuilder } from '../../app/core/models/auxiliary/builders/hangar-minified.builder';
import { HangarMinified } from '../../app/core/models/hangar/hangar-minified.model';
import { ChangeHangarSelectedAction, LoadHangarDetailsAction, LoadHangarsAction, ManageInsertHangarAction, DeleteHangarAction } from '../actions/hangar.action';
import { AppState } from '../state/index';

@Injectable({
  providedIn: 'root'
})
export class HangarFacade {

  hangarsMinified$: Observable<HangarMinified[]>;
  hangarSelected$ : Observable<Hangar>;

  constructor(
    private hangarAdapter: HangarAdapter,
    private store$: Store<AppState>
  ) {
    this.hangarsMinified$ = this.store$.pipe(select('hangar', 'hangarMinifiedPage', 'content'));
    this.hangarSelected$  = this.store$.pipe(select('hangar', 'hangarSelected'));
  }

  loadHangars(page: number) {
    this.store$.dispatch(new LoadHangarsAction(page));
  }

  changeHangarSelected(hangarMinified: HangarMinified): void {

    let hangar = new HangarBuilder<HangarMinified>().build(hangarMinified);
    this.store$.dispatch(new ChangeHangarSelectedAction(hangar));

  }

  deleteHangar(): void {
    this.store$.dispatch(new DeleteHangarAction());
  }

  loadHangarDetails(): void {
    this.store$.dispatch(new LoadHangarDetailsAction())
  }

  manageInsertHangar(hangar: Hangar): void {
    this.store$.dispatch(new ManageInsertHangarAction(hangar));
  }
}
