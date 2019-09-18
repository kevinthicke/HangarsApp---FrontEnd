import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../state/index';
import { Observable } from 'rxjs';
import { Hangar } from '../../app/core/models/hangar.model';
import { selectHangarList } from '../selectors/hangar.selector';
import { LoadHangarsAction, LoadHangarsNameAction } from '../actions/hangar.action';
import { HangarState } from '../state/hangar.state';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HangarFacade {

  hangars$: Observable<Hangar[]>;
  hangarsName$: Observable<string[]>;

  constructor(private store: Store<AppState>) {

    this.hangars$ = this.store.pipe(select(selectHangarList));

    this.hangarsName$ = this.store.pipe(
      select('hangar'),
      map((hangarState: HangarState) => {
        return hangarState.hangarsName;
      }));

  }

  loadHangars() {
    this.store.dispatch(new LoadHangarsAction());
  }

  loadHangarsName() {
    this.store.dispatch(new LoadHangarsNameAction());
  }

}
