import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../state/index';
import { Observable } from 'rxjs';
import { Error } from 'src/app/core/models/auxiliary/error.model';
import { RenderizeErrorAction } from '../actions/error.action';

@Injectable({
  providedIn: 'root'
})
export class ErrorFacade {

  error$: Observable<Error>;

  constructor(private store$: Store<AppState>) { 
    this.error$ = this.store$.select('error', 'error');
  }

  renderizeError(error: Error) {
    this.store$.dispatch(new RenderizeErrorAction(error));
  }

}