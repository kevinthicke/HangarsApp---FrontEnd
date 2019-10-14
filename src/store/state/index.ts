import { RouterReducerState } from '@ngrx/router-store';
import { CommerceState } from './commerce.state';
import { HangarState } from './hangar.state';
import { ProductState } from './product.state';
import { RouterStateUrl } from './router.state';
import { SecurityState } from './security.state';
import { ErrorState } from './error.state';

export interface AppState {
  router: RouterReducerState<RouterStateUrl>,
  hangar: HangarState;
  product: ProductState;
  commerce: CommerceState;
  security: SecurityState
  error: ErrorState
}
