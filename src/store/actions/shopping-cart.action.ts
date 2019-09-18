import { Action } from '@ngrx/store';


export enum ShoppingCartActionTypes {

  INCREMENT_PRODUCT_COUNTER = '[SHOPPIG_CART] INCREMENT_PRODUCT_ORDER',
  DECREMENT_PRODUCT_COUNTER = '[SHOPPING_CART] DECREMENT_PRODUCT_ORDER'

}

export class IncrementProductCounterAction implements Action {
  readonly type = ShoppingCartActionTypes.INCREMENT_PRODUCT_COUNTER;
}

export class DecrementProductCounterAction implements Action {
  readonly type = ShoppingCartActionTypes.DECREMENT_PRODUCT_COUNTER;
}

export type ShoppingCartActions = IncrementProductCounterAction | DecrementProductCounterAction;
