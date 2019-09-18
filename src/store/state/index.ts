import { ShoppingCartState } from './shopping-cart.state';
import { HangarState } from './hangar.state';
import { ProductState } from './product.state';

export interface AppState {
  shoppingCart: ShoppingCartState;
  hangar: HangarState;
  product: ProductState;
}
