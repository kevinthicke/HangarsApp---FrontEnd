import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RawProduct } from 'src/app/core/models/product.model';
import { ProductExtended } from '../../app/core/models/product.model';
import { LoadProductsAction, SetHangarSelectedNameAction } from '../actions/product.action';
import { AppState } from '../state/index';
import { ProductState } from '../state/product.state';

@Injectable({
  providedIn: 'root'
})
export class ProductFacade {

  products$: Observable<RawProduct[] | ProductExtended[]>;
  hangarSelectedName$: Observable<string>;

  constructor(private store: Store<AppState>) {

    this.products$ = this.store.pipe(
      select('product'),
      map((productState: ProductState) => productState.products)
    );

    this.hangarSelectedName$ = this.store.pipe(
      select('product'),
      map((productState: ProductState) => productState.hangarSelectedName)
    );

  }

  loadProducts(): void {
    this.store.dispatch(new LoadProductsAction());
  }

  setHangarSelectedName(hangarName: string): void {
    this.store.dispatch(new SetHangarSelectedNameAction(hangarName));
  }

}
