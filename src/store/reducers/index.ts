import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { shoppingCartReducer } from './shopping-cart.reducer';
import { environment } from '../../environments/environment';
import { hangarReducer } from './hangar.reducer';
import { AppState } from '../state/index';
import { productReducer } from './product.reducer';
import { routerReducer } from '@ngrx/router-store';

export const rootReducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  shoppingCart: shoppingCartReducer,
  hangar: hangarReducer,
  product: productReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
