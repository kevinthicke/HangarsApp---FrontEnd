import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartProduct } from 'src/app/core/models/commerce/cart-product.model';
import { ShoppingCart } from '../../../../core/models/commerce/shopping-cart.model';
import { fade } from '../../../../shared/animations/fade.animation';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.less'],
  animations: [ fade ]
})
export class ShoppingCartComponent implements OnInit {

  @Input() shoppingCart: ShoppingCart[];

  @Output() increaseCartProductQuantityEmitter = new EventEmitter<CartProduct>();
  @Output() decreaseCartProductQuantityEmitter = new EventEmitter<CartProduct>();
  @Output() purchaseOrderEmitter = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void { }

  increaseCartProductQuantity(cartProduct: CartProduct): void {
    this.increaseCartProductQuantityEmitter.emit(cartProduct);
  }

  decreaseCartProductQuantity(cartProduct: CartProduct): void {
    this.decreaseCartProductQuantityEmitter.emit(cartProduct);
  }

  purchaseOrder(): void {
    this.purchaseOrderEmitter.emit();
  }

}
