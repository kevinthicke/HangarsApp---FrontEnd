import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../state/index';
import { Observable } from 'rxjs';
import { Hangar } from '../../app/core/models/hangar.model';
import { GetHangarsAction } from '../actions/hangar.action';
import { selectHangarList } from '../selectors/hangar.selector';

@Injectable({
  providedIn: 'root'
})
export class HangarFacade {

  hangars$: Observable<Hangar[]>;

  constructor(private store: Store<AppState>) {

    this.store.dispatch(new GetHangarsAction());

    this.hangars$ = this.store.pipe(select(selectHangarList));

  }

}
