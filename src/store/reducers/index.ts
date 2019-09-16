import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { AppState } from '../state/shopping-cart.state';
import { shoppingCartReducer } from './shopping-cart.reducer';
import { environment } from '../../environments/environment';

export const rootReducers: ActionReducerMap<AppState> = {
  shoppingCart: shoppingCartReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
