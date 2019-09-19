import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Page } from '../../app/core/models/page.model';
import { ProductExtended, RawProduct } from '../../app/core/models/product.model';
import { ProductService } from '../../app/core/services/product.service';
import { 
  LoadProductsInHangarAction, 
  ProductActions, 
  ProductActionTypes, 
  ProductsInHangarLoadedAction, 
  ProductsLoadedAction, 
  SetHangarSelectedNameAction } from '../actions/product.action';

@Injectable({
  providedIn: 'root'
})

export class ProductEffects {

  constructor(
    private actions$: Actions,
    private productService: ProductService,
  ) { }

  @Effect() loadProducts$: Observable<ProductActions> = this.actions$.pipe(
    ofType<ProductActions>(ProductActionTypes.LOAD_PRODUCTS),
    switchMap(() => this.productService.getProducts().pipe(
      map((pageableProduct: Page<RawProduct>) => new ProductsLoadedAction(pageableProduct.content))
      )
    )
  );

  @Effect() setHangarSelectedName$: Observable<ProductActions> = this.actions$.pipe(
    ofType<ProductActions>(ProductActionTypes.SET_HANGAR_SELECTED_NAME),
    map((action: SetHangarSelectedNameAction) => new LoadProductsInHangarAction(action.payload))
  );

  @Effect() loadProductsByHangarName$: Observable<ProductActions> = this.actions$.pipe(
    ofType<ProductActions>(ProductActionTypes.LOAD_PRODUCTS_IN_HANGAR),
    switchMap((action: LoadProductsInHangarAction) => {
      console.log(action);
      return this.productService.getProductsByHangarName(action.payload).pipe(
        map((products: ProductExtended[]) => new ProductsInHangarLoadedAction(products))
      )
    })
  );

}
