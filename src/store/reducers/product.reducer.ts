import { ProductState } from '../state/product.state';
import { ProductActionTypes, ProductActions } from '../actions/product.action';

import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { RawProduct } from '../../app/core/models/product.model';

const initialState: ProductState = {
  products: [],
  hangarSelectedName: '',
  pending: false
};

export function productReducer(state: ProductState, action: ProductActions): ProductState {

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
