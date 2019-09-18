import { Actions, Effect, ofType } from '@ngrx/effects';
import { ProductService } from '../../app/core/services/product.service';
import { LoadProductsAction, ProductActionTypes, ProductsLoadedAction } from '../actions/product.action';
import { Injectable } from '@angular/core';
import { switchMap, map } from 'rxjs/operators';
import { Page } from '../../app/core/models/page.model';
import { RawProduct, Product } from '../../app/core/models/product.model';

@Injectable({
  providedIn: 'root'
})

export class ProductEffects {

  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) { }

  @Effect() loadProducts$ = this.actions$.pipe(
    ofType(ProductActionTypes.LOAD_PRODUCTS),
    switchMap(() => this.productService.getProducts().pipe(
        map((pageableProduct: Page<RawProduct>) => pageableProduct.content),
        map((products: RawProduct[]) => {
          return new ProductsLoadedAction(products);
        })
      )
    )
  );

}
