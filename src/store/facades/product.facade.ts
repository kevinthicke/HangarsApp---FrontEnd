import { Injectable } from '@angular/core';
import { Product, RawProduct } from 'src/app/core/models/product.model';
import { Observable } from 'rxjs';
import { AppState } from '../state/index';
import { Store, select } from '@ngrx/store';
import { LoadProductsAction } from '../actions/product.action';
import { map } from 'rxjs/operators';
import { ProductState } from '../state/product.state';

@Injectable({
  providedIn: 'root'
})
export class ProductFacade {

  products$: Observable<RawProduct[]>;

  constructor(private store: Store<AppState>) {

    this.store.dispatch(new LoadProductsAction());

    this.products$ = this.store.pipe(
      select('product'),
      map((productState: ProductState) => productState.products)
    );

  }

}
