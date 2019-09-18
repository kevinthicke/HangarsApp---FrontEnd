import { Action } from '@ngrx/store';
import { RawProduct } from '../../app/core/models/product.model';

export enum ProductActionTypes {

  LOAD_PRODUCTS = '[PRODUCT] GET_PRODUCTS',
  PRODUCTS_LOADED = '[PRODUCT] PRODUCTS_LOADED',

  SET_HANGAR_SELECTED_NAME = '[PRODUCT] SET_HANGAR_SELECTED_NAME'
}

export class LoadProductsAction implements Action {
  readonly type = ProductActionTypes.LOAD_PRODUCTS;
}

export class ProductsLoadedAction implements Action {
  readonly type = ProductActionTypes.PRODUCTS_LOADED;

  constructor(public payload: RawProduct[]) { }
}

export class SetHangarSelectedName implements Action {
  readonly type = ProductActionTypes.SET_HANGAR_SELECTED_NAME;

  constructor(public payload: string) { }
}

export type ProductActions = (
  LoadProductsAction |
  ProductsLoadedAction |
  SetHangarSelectedName
);


