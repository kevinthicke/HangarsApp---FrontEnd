import { RouterReducerState } from '@ngrx/router-store';

import { ShoppingCartState } from './shopping-cart.state';
import { HangarState } from './hangar.state';
import { ProductState } from './product.state';
import { RouterStateUrl } from './router.state';

export interface AppState {
  router: RouterReducerState<RouterStateUrl>,
  shoppingCart: ShoppingCartState;
  hangar: HangarState;
  product: ProductState;
}
