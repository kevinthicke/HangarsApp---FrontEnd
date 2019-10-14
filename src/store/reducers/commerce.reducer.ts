import { ShoppingCart } from 'src/app/core/models/commerce/shopping-cart.model';
import { CommerceActions, CommerceActionTypes } from '../actions/commerce.action';
import { CommerceState } from '../state/commerce.state';
import { insertInShoppingCart, removeFromShoppingCart } from './utils/commerce-reducer.utils';

 const initialState: CommerceState = {
  shoppingCart: new ShoppingCart(),
  pending: false
}

export function commerceReducer(state: CommerceState = initialState, action: CommerceActions): CommerceState {

  switch (action.type) {
    case CommerceActionTypes.ADD_TO_SHOPPING_CART:
      return {
        ...state,
        shoppingCart: insertInShoppingCart(state.shoppingCart, action.payload)
      };

    case CommerceActionTypes.REMOVE_FROM_SHOPPING_CART:
      return {
        ...state,
        shoppingCart: removeFromShoppingCart(state.shoppingCart, action.payload)
      };

    default:
      return state;
  }
}
