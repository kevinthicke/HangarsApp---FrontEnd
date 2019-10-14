import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HangarMinified } from '../../app/core/models/hangar/hangar-minified.model';
import { ProductMinified } from '../../app/core/models/product/product-minified';
import { Product } from '../../app/core/models/product/product.model';
import { SaveProductAction, SetHangarSelectedAction } from '../actions/product.action';
import { getHangarSelected, getProduct, getProducts } from '../selectors/product.selector;
import { ProductState } from '../state/product.state';

@Injectable({
  providedIn: 'root'
})
export class ProductFacade {

  productsMinified$: Observable<ProductMinified[]>;
  product$: Observable<Product>;
  hangarSelected$: Observable<HangarMinified>;

  constructor(private store: Store<ProductState>) {

    this.productsMinified$ = this.store.select(getProducts);
    this.product$  = this.store.select(getProduct);
    this.hangarSelected$ = this.store.select(getHangarSelected);

  }

  setHangarSelectedName(hangarMinified: HangarMinified): void {
    this.store.dispatch(new SetHangarSelectedAction(hangarMinified));
  }

  saveProduct(product: Product): void {
    this.store.dispatch(new SaveProductAction(product));
  }

}
