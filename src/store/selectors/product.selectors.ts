import { ProductState } from '../state/product.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';


export const getProductState = createFeatureSelector<ProductState>('products');

export const getProducts = createSelector(
  getProductState,
  (state: ProductState) => state.products
);

export const getProduct = createSelector(
  getProductState,
  (state: ProductState) => state.product
);

export const getHangarSelected = createSelector(
  getProductState,
  (state: ProductState) => state.hangarSelected
);
