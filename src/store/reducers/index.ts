import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { shoppingCartReducer } from './shopping-cart.reducer';
import { environment } from '../../environments/environment';
import { hangarReducer } from './hangar.reducer';
import { AppState } from '../state/index';

export const rootReducers: ActionReducerMap<AppState> = {
  shoppingCart: shoppingCartReducer,
  hangar: hangarReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
