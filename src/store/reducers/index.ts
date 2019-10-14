import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { AppState } from '../state/index';
import { commerceReducer } from './commerce.reducer';
import { hangarReducer } from './hangar.reducer';
import { productReducer } from './product.reducer';
import { securityReducer } from './security.reducer';
import { errorReducer } from './error.reducer';

export const rootReducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  hangar: hangarReducer,
  product: productReducer,
  commerce: commerceReducer,
  security: securityReducer,
  error: errorReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
