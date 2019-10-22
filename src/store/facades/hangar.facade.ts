import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HangarMinified } from '../../app/core/models/hangar/hangar-minified.model';
import { LoadHangarsAction, SetHangarSelectedAction, LoadHangarDetailsAction } from '../actions/hangar.action';
import { AppState } from '../state/index';
import { Hangar } from 'src/app/core/models/hangar/hangar.model';
import { HangarAdapter } from '../../app/core/models/auxiliary/adapters/hangar.adapter';

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

  setHangarSelected(hangarMinified: HangarMinified): void {
    const hangar = this.hangarAdapter.adapt(hangarMinified);
    this.store$.dispatch(new SetHangarSelectedAction(hangar));
  }

  deleteHangar(): void {
    this.hangarSelected$.subscribe(hangar => {
      console.log('Borrando ' + hangar.name);
    });
  }

  loadHangarDetails(): void {
    this.store$.dispatch(new LoadHangarDetailsAction())
  }

}
