import { Actions, Effect, ofType } from '@ngrx/effects';
import { ProductService } from '../../app/core/services/product.service';
import { ProductActionTypes, ProductsLoadedAction, ProductActions, ProductsInHangarLoadedAction, LoadProductsInHangarAction, SetHangarSelectedNameAction } from '../actions/product.action';
import { Injectable } from '@angular/core';
import { switchMap, map, tap } from 'rxjs/operators';
import { Page } from '../../app/core/models/page.model';
import { RawProduct, Product, ProductExtended } from '../../app/core/models/product.model';
import { HangarService } from '../../app/core/services/hangar.service';
import { select, Action } from '@ngrx/store';
import { HangarFacade } from '../facades/hangar.facade';
import { HangarState } from '../state/hangar.state';
import { ProductState } from '../state/product.state';
import { Observable } from 'rxjs';

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
    switchMap(action => this.productService.getProducts().pipe(
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
