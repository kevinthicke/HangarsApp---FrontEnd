import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCart } from '../../../../core/models/commerce/shopping-cart.model';
import { ProductMinified } from '../../../../core/models/product/product-minified';

@Component({
  selector: 'app-footer-toast',
  templateUrl: './footer-toast.component.html',
  styleUrls: ['./footer-toast.component.less']
})
export class FooterToastComponent implements OnInit {

  @Input() shoppingCart: ShoppingCart;

  lastProduct: ProductMinified;
  quantity: number;

  constructor() { }

  ngOnInit(): void {
    const cartLength = this.shoppingCart.cart.length;

    this.lastProduct = this.shoppingCart.cart[cartLength - 1].productMinified;
    this.quantity = this.shoppingCart.cart[cartLength - 1].quantity;

  }

}
