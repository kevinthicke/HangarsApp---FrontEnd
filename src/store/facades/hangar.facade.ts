import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HangarMinified } from '../../app/core/models/hangar/hangar-minified.model';
import { LoadHangarsAction, SetHangarSelectedAction } from '../actions/hangar.action';
import { AppState } from '../state/index';

@Injectable({
  providedIn: 'root'
})
export class HangarFacade {

  hangarsMinified$: Observable<HangarMinified[]>;
  hangarSelected$ : Observable<HangarMinified>;

  constructor(private store: Store<AppState>) {
    this.hangarsMinified$ = this.store.pipe(select('hangar', 'hangarMinifiedPage', 'content'));
    this.hangarSelected$  = this.store.pipe(select('hangar', 'hangarSelected'));
  }

  loadHangars(page: number) {
    this.store.dispatch(new LoadHangarsAction(page));
  }

  setHangarSelected(hangarMinified: HangarMinified): void {
    this.store.dispatch(new SetHangarSelectedAction(hangarMinified));
  }

  deleteHangar(): void {
    this.hangarSelected$.subscribe(hangar => {
      console.log('Borrando ' + hangar.name);
    });
  }

}
