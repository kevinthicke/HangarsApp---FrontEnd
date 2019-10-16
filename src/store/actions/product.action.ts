import { Action } from '@ngrx/store';
import { ProductHangarIds } from '../../app/core/models/auxiliary/product-hangar-ids.model';
import { HangarMinified } from '../../app/core/models/hangar/hangar-minified.model';
import { ProductMinified } from '../../app/core/models/product/product-minified';
import { Product } from '../../app/core/models/product/product.model';

export enum ProductActionTypes {

  RESET_PRODUCT = '[PRODUCT] RESET PRODUCT',

  SET_HANGAR_SELECTED_NAME = '[PRODUCT] SET_HANGAR_SELECTED_NAME',

  LOAD_PRODUCTS_IN_HANGAR = '[PRODUCT] LOAD_PRODUCTS_IN_HANGAR',
  PRODUCTS_IN_HANGAR_LOADED = '[PRODUCT] LOAD_PRODUCTS_IN_HANGAR_LOADED',

  LOAD_PRODUCT_DETAILS = '[PRODUCT] LOAD_PRODUCT_DETAILS',
  PRODUCT_DETAILS_LOADED = '[PRODUCT] PRODUCT_DETAILS_LOADED',

  MANAGE_INSERT_PRODUCT = '[PRODUCT] MANAGE_INSERT_PRODUCT',
  SAVE_PRODUCT = '[PRODUCT] SAVE',

  UPDATE_PRODUCT = '[PRODUCT] UPDATE'

}

export class ResetProductStateAction implements Action {
  readonly type = ProductActionTypes.RESET_PRODUCT;
}

export class SetHangarSelectedAction implements Action {
  readonly type = ProductActionTypes.SET_HANGAR_SELECTED_NAME;

  constructor(public payload: HangarMinified) { }
}

export class LoadProductsInHangarAction implements Action {
  readonly type = ProductActionTypes.LOAD_PRODUCTS_IN_HANGAR;

  constructor(public payload: HangarMinified) { }
}

export class ProductsInHangarLoadedAction implements Action {
  readonly type = ProductActionTypes.PRODUCTS_IN_HANGAR_LOADED;

  constructor(public payload: ProductMinified[]) { }
}

export class LoadProductDetailsAction implements Action {
  readonly type = ProductActionTypes.LOAD_PRODUCT_DETAILS;

  constructor(public payload: ProductHangarIds) { }
}

export class ProductDetailsLoadedAction implements Action {
  readonly type = ProductActionTypes.PRODUCT_DETAILS_LOADED;

  constructor(public payload: Product) { }
}

export class SaveProductAction implements Action {
  readonly type = ProductActionTypes.SAVE_PRODUCT;

  constructor(public payload: Product) { }
}

export class UpdateproductAction implements Action {
  readonly type = ProductActionTypes.UPDATE_PRODUCT;

  constructor(public payload: Product) { }
}

export class ManageInsertProductAction implements Action {
  readonly type = ProductActionTypes.MANAGE_INSERT_PRODUCT;

  constructor(public payload: Product) { }
}

export type ProductActions = (
  ResetProductStateAction |
  SetHangarSelectedAction |
  LoadProductsInHangarAction |
  ProductsInHangarLoadedAction |
  LoadProductDetailsAction |
  ProductDetailsLoadedAction |
  SaveProductAction |
  ManageInsertProductAction
);


