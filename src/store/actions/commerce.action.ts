import { Action } from '@ngrx/store';
import { CartProduct } from '../../app/core/models/commerce/cart-product.model';
import { ShoppingCart } from '../../app/core/models/commerce/shopping-cart.model';


export enum CommerceActionTypes {

  ADD_TO_SHOPPING_CART = '[COMMERCE] ADD_TO_SHOPPING_CART',
  REMOVE_FROM_SHOPPING_CART = '[COMMERCE] REMOVE_FROM_SHOPPING_CART',

  PURCHASE_ORDER = '[COMMERCE] PURCHASE_ORDER'
}

export class AddToShoppingCartAction implements Action {
  readonly type = CommerceActionTypes.ADD_TO_SHOPPING_CART;

  constructor(public payload: CartProduct) { }
}

export class RemoveFromShoppingCartAction implements Action {
  readonly type = CommerceActionTypes.REMOVE_FROM_SHOPPING_CART;

  constructor(public payload: CartProduct) { }
}

export class PurchaseOrderAction implements Action {
  readonly type = CommerceActionTypes.PURCHASE_ORDER;
}

export type CommerceActions = (
  AddToShoppingCartAction |
  RemoveFromShoppingCartAction | 
  PurchaseOrderAction
);
