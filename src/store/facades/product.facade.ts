import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HangarMinified } from '../../app/core/models/hangar/hangar-minified.model';
import { ProductForm } from '../../app/core/models/product-form.model';
import { ProductMinified } from '../../app/core/models/product/product-minified';
import { Product } from '../../app/core/models/product/product.model';
import { SaveProductAction, SetHangarSelectedAction } from '../actions/product.action';
import { AppState } from '../state/index';
import { ProductState } from '../state/product.state';
import { getProducts } from '../selectors/product.selectors';

@Injectable({
  providedIn: 'root'
})
export class ProductFacade {

  productsMinified$: Observable<ProductMinified[]>;
  product$: Observable<Product>;
  hangarSelected$: Observable<HangarMinified>;

  constructor(private store: Store<AppState>) {

    this.productsMinified$ = this.store.select(getProducts);
/*     this.productsMinified$ = this.store.pipe(
      select('product'),
      map((productState: ProductState) => productState.products)
    );
 */
    this.hangarSelected$ = this.store.pipe(
      select('product'),
      map((productState: ProductState) => productState.hangarSelected)
    );

    this.product$ = this.store.pipe(
      select('product', 'product')
    )

  }

  setHangarSelectedName(hangarMinified: HangarMinified): void {
    this.store.dispatch(new SetHangarSelectedAction(hangarMinified));
  }

  saveProduct(product: Product): void {
    this.store.dispatch(new SaveProductAction(product));
  }

}
