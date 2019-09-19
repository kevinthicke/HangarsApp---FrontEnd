import { ProductActions, ProductActionTypes } from '../actions/product.action';
import { ProductState } from '../state/product.state';


const initialState: ProductState = {
  products: [],
  hangarSelectedName: '',
  pending: false
};

export function productReducer(state: ProductState = initialState, action: ProductActions): ProductState {

  switch (action.type) {

    case ProductActionTypes.LOAD_PRODUCTS:
      return { ...state, pending: true };

    case ProductActionTypes.PRODUCTS_LOADED:
      return { ...state, products: action.payload, pending: false };

    case ProductActionTypes.SET_HANGAR_SELECTED_NAME:
      return { ...state, hangarSelectedName: action.payload, pending: false };

    case ProductActionTypes.LOAD_PRODUCTS_IN_HANGAR:
      return { ...state, pending: true };

    case ProductActionTypes.PRODUCTS_IN_HANGAR_LOADED:
      return { ...state, products: action.payload, pending: false };

    default:
      return state;
  }

}
