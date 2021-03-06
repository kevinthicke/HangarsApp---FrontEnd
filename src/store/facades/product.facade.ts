import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HangarMinified } from '../../app/core/models/hangar/hangar-minified.model';
import { ProductMinified } from '../../app/core/models/product/product-minified';
import { Product } from '../../app/core/models/product/product.model';
import { SaveProductAction, SetHangarSelectedAction, ManageInsertProductAction } from '../actions/product.action';
import { ProductState } from '../state/product.state';
import { getProducts, getProduct, getHangarSelected } from '../selectors/product.selector';

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

  manageInsertProduct(product: Product): void {
    this.store.dispatch(new ManageInsertProductAction(product));
  }

}
