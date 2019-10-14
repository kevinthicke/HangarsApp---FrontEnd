import { ProductActions, ProductActionTypes } from '../actions/product.action';
import { ProductState } from '../state/product.state';
import { Product } from '../../app/core/models/product/product.model';


const initialState: ProductState = {
  products: [],
  product: new Product(),
  hangarSelected: null,
  pending: false
};

export function productReducer(state: ProductState = initialState, action: ProductActions): ProductState {

  switch (action.type) {

    case ProductActionTypes.RESET_PRODUCT:
      return { ...state, product: initialState.product };

    case ProductActionTypes.SET_HANGAR_SELECTED_NAME:
      return { ...state, hangarSelected: action.payload, pending: false };

    case ProductActionTypes.LOAD_PRODUCTS_IN_HANGAR:
      return { ...state, pending: true };

    case ProductActionTypes.PRODUCTS_IN_HANGAR_LOADED:
      return { ...state, products: action.payload, pending: false };

    case ProductActionTypes.LOAD_PRODUCT_DETAILS:
      return {
        ...state,
        product: {
          ...state.product,
          id: action.payload.productId,
          hangarId: action.payload.hangarId
        },
        pending: true
      };

    case ProductActionTypes.PRODUCT_DETAILS_LOADED:
      
      return {
        ...state,
        product: {
          ...state.product,

          id: action.payload.id,
          name: action.payload.name,
          description: action.payload.description,
          price: action.payload.price,
          quantity: action.payload.quantity

        },
        pending: false };

    default:
      return state;
  }

}
