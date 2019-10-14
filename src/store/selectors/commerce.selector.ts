import { CommerceState } from '../state/commerce.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getCommerceState = createFeatureSelector<CommerceState>('commerce');


export const getShoppingCart = createSelector(
  getCommerceState,
  (state: CommerceState) => state.shoppingCart
);
