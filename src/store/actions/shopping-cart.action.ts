import { Action } from '@ngrx/store';


export enum ShoppingCartActionTypes {
  INCREMENT_PRODUCT_COUNTER = '[SHOPPIG_CART] INCREMENT_PRODUCT_ORDER',
  DECREMENT_PRODUCT_COUNTER = '[SHOPPING_CART] DECREMENT_PRODUCT_ORDER'
}

export class IncrementAction implements Action {
  readonly type = ShoppingCartActionTypes.INCREMENT_PRODUCT_COUNTER;
}

export class DecrementAction implements Action {
  readonly type = ShoppingCartActionTypes.DECREMENT_PRODUCT_COUNTER;
}

export type ShoppingCartActions = IncrementAction | DecrementAction;
