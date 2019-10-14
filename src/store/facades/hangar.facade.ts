import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Hangar } from '../../app/core/models/hangar.model';
import { HangarMinified } from '../../app/core/models/hangar/hangar-minified.model';
import { LoadHangarsAction, LoadHangarsNameAction } from '../actions/hangar.action';
import { HangarState } from '../state/hangar.state';
import { AppState } from '../state/index';
import { PaginableHangar } from '../../app/core/models/hangar/paginable-hangar.model';

@Injectable({
  providedIn: 'root'
})
export class HangarFacade {

  hangars$: Observable<PaginableHangar>;
  hangarsMinified$: Observable<HangarMinified[]>;

  constructor(private store: Store<AppState>) {

    this.hangars$ = this.store.pipe(select('hangar', 'hangars'));

    this.hangarsMinified$ = this.store.pipe(
      select('hangar'),
      map((hangarState: HangarState) => hangarState.hangarsName ));

  }

  loadHangars() {
    this.store.dispatch(new LoadHangarsAction());
  }

  loadHangarsName() {
    this.store.dispatch(new LoadHangarsNameAction());
  }

}
