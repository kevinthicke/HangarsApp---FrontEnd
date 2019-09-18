import { Store, select } from '@ngrx/store';
import { AppState } from '../state';
import { IncrementProductCounterAction, DecrementProductCounterAction } from '../actions/shopping-cart.action';
import { Injectable } from '@angular/core';
import { ShoppingCartState } from '../state/shopping-cart.state';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartFacade {

  productCounter$: Observable<number>;

  constructor(private store: Store<AppState>) {

    this.productCounter$ = this.store.pipe(
      select('shopping-cart'),
      map((shoppingCartState: ShoppingCartState) => shoppingCartState.productCounter));

  }

  increaseProductCounter(): void {
    this.store.dispatch(new IncrementProductCounterAction());
  }

  decreaseProductCounter(): void {
    this.store.dispatch(new DecrementProductCounterAction());
  }

}
