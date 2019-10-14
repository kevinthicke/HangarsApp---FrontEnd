import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ShoppingCart } from 'src/app/core/models/commerce/shopping-cart.model';
import { CartProduct } from '../../app/core/models/commerce/cart-product.model';
import { AddToShoppingCartAction, PurchaseOrderAction, RemoveFromShoppingCartAction } from '../actions/commerce.action';
import { AppState } from '../state';

@Injectable({
  providedIn: 'root'
})
export class CommerceFacade {

  shoppingCart$: Observable<ShoppingCart>;

  constructor(private store$: Store<AppState>) {
    this.shoppingCart$ = this.store$.select('commerce', 'shoppingCart');
  }

  addToShoppingCart(cartProduct: CartProduct): void {
    this.store$.dispatch(new AddToShoppingCartAction(cartProduct));
  }

  removeFromShoppingCart(cartProduct: CartProduct): void {
    this.store$.dispatch(new RemoveFromShoppingCartAction(cartProduct));
  }

  purchaseOrder(): void {
    this.store$.dispatch(new PurchaseOrderAction())
  }

}
