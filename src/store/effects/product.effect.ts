import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { ProductsHangar } from '../../app/core/models/products-hangar.model';
import { HangarService } from '../../app/core/services/hangar.service';
import { ProductService } from '../../app/core/services/product.service';
import { LoadProductDetailsAction, LoadProductsInHangarAction, ProductActions, ProductActionTypes, ProductDetailsLoadedAction, ProductsInHangarLoadedAction, SaveProductAction, SetHangarSelectedAction, UpdateproductAction } from '../actions/product.action';
import { ProductMinified } from '../../app/core/models/product/product-minified';
import { Product } from '../../app/core/models/product/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductEffects {

  constructor(
    private actions$: Actions,
    private hangarService: HangarService,
    private router: Router,
    private productService: ProductService,
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

  @Effect({ dispatch: false }) saveProduct$: Observable<ProductActions> = this.actions$.pipe(
    ofType<ProductActions>(ProductActionTypes.SAVE_PRODUCT),

    switchMap((action: SaveProductAction) => this.saveProductInHangar(action))
  );

 /*  @Effect({ dispatch: false }) modifyProduct$: Observable<ProductActions> = this.actions$.pipe(
    ofType<ProductActions>(ProductActionTypes.UPDATE_PRODUCT),

    switchMap((action: UpdateproductAction) => this.productService.update(action.payload)),
    tap(() => this.router.navigate(['products']))
  ) */

  private saveProductInHangar(action: SaveProductAction): Observable<ProductActions> {

    const { hangarId, ...product } = action.payload;

    return this.productService.insertProduct(action.payload).pipe(

      switchMap((product: Product) => this.hangarService.saveProductInHangar(hangarId, product.id)),
      switchMap((productsHangar: ProductsHangar) => {

        return this.productService.setProductQuantity(
          productsHangar.hangar_id,
          productsHangar.product_id,
          productsHangar.quantity);
      }),
      tap(() => this.router.navigate(['products']))
    );

  }

/*   @Effect({ dispatch: false }) SaveProduct$: Observable<ProductActions> = this.actions$.pipe(
    ofType<ProductActions>(ProductActionTypes.SAVE_PRODUCT),

    switchMap((action: SaveProductAction) => this.saveProductInHangar(action))
  );

 */

}
