import { ShoppingCart } from '../../app/core/models/commerce/shopping-cart.model';

export interface CommerceState {
  shoppingCart: ShoppingCart,
  pending: boolean
}