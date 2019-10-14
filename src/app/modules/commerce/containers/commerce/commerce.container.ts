import { Component, OnInit } from '@angular/core';
import { CommerceFacade } from '../../../../../store/facades/commerce.facade';
import { ShoppingCart } from 'src/app/core/models/commerce/shopping-cart.model';
import { Observable } from 'rxjs';
import { CartProduct } from '../../../../core/models/commerce/cart-product.model';

@Component({
  selector: 'app-commerce',
  templateUrl: './commerce.container.html',
  styleUrls: ['./commerce.container.less']
})
export class CommerceContainer implements OnInit {

  shoppingCart$: Observable<ShoppingCart>;

  constructor(
    private commerceFacade: CommerceFacade
  ) { }

  ngOnInit() {
    this.shoppingCart$ = this.commerceFacade.shoppingCart$;
  }

  handleIncreaseCartProductQuantity(cartProduct: CartProduct): void {
   this.commerceFacade.addToShoppingCart(cartProduct);
  }

  handleDecreaseCartProductQuantity(cartProduct: CartProduct): void {
   this.commerceFacade.removeFromShoppingCart(cartProduct);
  }

  handlePurchaseOrder(): void {
    this.commerceFacade.purchaseOrder();
  }

}

