import { Injectable } from '@angular/core';
import { Product, RawProduct } from 'src/app/core/models/product.model';
import { Observable } from 'rxjs';
import { AppState } from '../state/index';
import { Store, select } from '@ngrx/store';
import { LoadProductsAction, SetHangarSelectedName } from '../actions/product.action';
import { map } from 'rxjs/operators';
import { ProductState } from '../state/product.state';

@Injectable({
  providedIn: 'root'
})
export class ProductFacade {

  products$: Observable<RawProduct[]>;
  hangarSelectedName: string;

  constructor(private store: Store<AppState>) {

    this.store.dispatch(new LoadProductsAction());

    this.products$ = this.store.pipe(
      select('product'),
      map((productState: ProductState) => productState.products)
    );

  }

  setHangarSelectedName(hangarName: string): void {
    this.store.dispatch(new SetHangarSelectedName(hangarName));
  }

}
