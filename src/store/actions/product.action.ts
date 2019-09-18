import { Action } from '@ngrx/store';
import { RawProduct } from '../../app/core/models/product.model';

export enum ProductActionTypes {
  LOAD_PRODUCTS = '[PRODUCT] GET_PRODUCTS',
  PRODUCTS_LOADED = '[PRODUCT] PRODUCTS_LOADED'
}

export class LoadProductsAction implements Action {
  readonly type = ProductActionTypes.LOAD_PRODUCTS;
}

export class ProductsLoadedAction implements Action {
  readonly type = ProductActionTypes.PRODUCTS_LOADED;

  constructor(public payload: RawProduct[]) { }
}

export type ProductActions = LoadProductsAction | ProductsLoadedAction;


