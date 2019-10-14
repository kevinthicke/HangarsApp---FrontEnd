import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../state';
import { RouterStateUrl } from '../state/router.state';

@Injectable({
  providedIn: 'root'
})
export class RouterFacade {

  router$: Observable<RouterStateUrl>;

  constructor(private store: Store<AppState>) {
    this.router$ = this.store.pipe(select('router', 'state'));
  }
}
