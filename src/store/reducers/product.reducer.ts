import { ProductState } from '../state/product.state';
import { ProductActionTypes, ProductActions } from '../actions/product.action';

const initialState: ProductState = {
  products: [],
  pending: false
};

export function productReducer(state: ProductState, action: ProductActions): ProductState {

  switch (action.type) {

    case ProductActionTypes.LOAD_PRODUCTS:
      return { ...state, pending: true };

    case ProductActionTypes.PRODUCTS_LOADED:
      return { ...state, products: action.payload, pending: false };

    default:
      return state;
  }

}
