import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { shoppingCartReducer } from './shopping-cart.reducer';
import { environment } from '../../environments/environment';
import { hangarReducer } from './hangar.reducer';
import { AppState } from '../state/index';
import { productReducer } from './product.reducer';

export const rootReducers: ActionReducerMap<AppState> = {
  shoppingCart: shoppingCartReducer,
  hangar: hangarReducer,
  product: productReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
