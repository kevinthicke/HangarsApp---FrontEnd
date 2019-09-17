import { ShoppingCartState } from './shopping-cart.state';
import { HangarState } from './hangar.state';

export interface AppState {
  shoppingCart: ShoppingCartState;
  hangar: HangarState;
}
