import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, switchMap, tap, withLatestFrom, combineLatest, mergeMap } from 'rxjs/operators';
import { ProductMinified } from '../../app/core/models/product/product-minified';
import { Product } from '../../app/core/models/product/product.model';
import { HangarService } from '../../app/core/services/hangar.service';
import { ProductService } from '../../app/core/services/product.service';
import { LoadProductDetailsAction, LoadProductsInHangarAction, ProductActions, ProductActionTypes, ProductDetailsLoadedAction, ProductsInHangarLoadedAction, SetHangarSelectedAction, ManageInsertProductAction, UpdateproductAction, SaveProductAction } from '../actions/product.action';
import { AppState } from '../state';
import { Store } from '@ngrx/store';
import { utils } from 'protractor';
import { ProductsHangar } from '../../app/core/models/products-hangar.model';

@Injectable({
  providedIn: 'root'
})
export class ProductEffects {

  constructor(
    private router: Router,
    private actions$: Actions,
    private store$: Store<AppState>,
    private productService: ProductService,
    private hangarService: HangarService
  ) { }

  @Effect() setHangarSelectedName$: Observable<ProductActions> = this.actions$.pipe(
    ofType<ProductActions>(ProductActionTypes.SET_HANGAR_SELECTED_NAME),

    map((action: SetHangarSelectedAction) => new LoadProductsInHangarAction(action.payload))
  );


  @Effect() loadProductsByHangarName$: Observable<ProductActions> = this.actions$.pipe(
    ofType<ProductActions>(ProductActionTypes.LOAD_PRODUCTS_IN_HANGAR),

    switchMap((action: LoadProductsInHangarAction) => this.productService.getProductsByHangarId(action.payload.id)),
    map((products: ProductMinified[]) => new ProductsInHangarLoadedAction(products))
  );

  @Effect() productDetailsLoaded$: Observable<ProductActions> = this.actions$.pipe(
    ofType<ProductActions>(ProductActionTypes.LOAD_PRODUCT_DETAILS),

    switchMap((action: LoadProductDetailsAction) => {
      const { hangarId, productId } = action.payload;
      return this.productService.getProduct(hangarId, productId);
    }),
    map((product: Product) => new ProductDetailsLoadedAction(product))
  );

  @Effect() manageInsertProduct$: Observable<UpdateproductAction | SaveProductAction> | null = this.actions$.pipe(
    ofType<ProductActions>(ProductActionTypes.MANAGE_INSERT_PRODUCT),

    withLatestFrom(this.store$.select('router', 'state', 'url')),
    map(([action, url]: [ManageInsertProductAction, string]) => {

      if (url.includes('modify')) {
        return new UpdateproductAction(action.payload);
      }

      if (url.includes('insert')) {
        return new SaveProductAction(action.payload);
      }

    })
  );

   @Effect({ dispatch: false }) saveProduct$ = this.actions$.pipe(
    ofType<ProductActions>(ProductActionTypes.SAVE_PRODUCT),

    switchMap((action: SaveProductAction) => {
      return this.productService.fullSave(action.payload);
    }),
    tap(() => this.router.navigate(['products']))
  );

  @Effect({ dispatch: false }) updateProduct$ = this.actions$.pipe(
    ofType<ProductActions>(ProductActionTypes.UPDATE_PRODUCT),

    switchMap((action: UpdateproductAction) => {
      return this.productService.fullUpdate(action.payload);
    }),
    tap(() => this.router.navigate(['products']))
  );

}
