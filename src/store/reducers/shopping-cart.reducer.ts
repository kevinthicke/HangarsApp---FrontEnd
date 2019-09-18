import { ShoppingCartState } from '../state/shopping-cart.state';
import { ShoppingCartActionTypes, ShoppingCartActions } from '../actions/shopping-cart.action';

export const initialState: ShoppingCartState = {
  productCounter: 0
};

export function shoppingCartReducer(state: ShoppingCartState = initialState, action: ShoppingCartActions) {
  switch(action.type) {
    case ShoppingCartActionTypes.INCREMENT_PRODUCT_COUNTER:
      return { ... state, productCounter: ++state.productCounter };

    case ShoppingCartActionTypes.DECREMENT_PRODUCT_COUNTER:
      return (state.productCounter > 0)
        ? { ... state, productCounter: --state.productCounter }
        : state;

    default:
      return state;
  }

}
