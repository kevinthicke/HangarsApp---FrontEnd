import { Action } from '@ngrx/store';
import { RawProduct, ProductExtended } from '../../app/core/models/product.model';

export enum ProductActionTypes {

  LOAD_PRODUCTS = '[PRODUCT] LOAD_PRODUCTS',
  PRODUCTS_LOADED = '[PRODUCT] PRODUCTS_LOADED',

  SET_HANGAR_SELECTED_NAME = '[PRODUCT] SET_HANGAR_SELECTED_NAME',

  LOAD_PRODUCTS_IN_HANGAR = '[PRODUCT] LOAD_PRODUCTS_IN_HANGAR',
  PRODUCTS_IN_HANGAR_LOADED = '[PRODUCT] LOAD_PRODUCTS_IN_HANGAR_LOADED'

}

export class LoadProductsAction implements Action {
  readonly type = ProductActionTypes.LOAD_PRODUCTS;
}

export class ProductsLoadedAction implements Action {
  readonly type = ProductActionTypes.PRODUCTS_LOADED;

  constructor(public payload: RawProduct[]) { }
}

export class SetHangarSelectedNameAction implements Action {
  readonly type = ProductActionTypes.SET_HANGAR_SELECTED_NAME;

  constructor(public payload: string) { }
}

export class LoadProductsInHangarAction implements Action {
  readonly type = ProductActionTypes.LOAD_PRODUCTS_IN_HANGAR;

  constructor(public payload: string) { }
}

export class ProductsInHangarLoadedAction implements Action {
  readonly type = ProductActionTypes.PRODUCTS_IN_HANGAR_LOADED;

  constructor(public payload: ProductExtended[]) { }
}

export type ProductActions = (
  LoadProductsAction |
  ProductsLoadedAction |
  SetHangarSelectedNameAction |
  LoadProductsInHangarAction |
  ProductsInHangarLoadedAction
);


