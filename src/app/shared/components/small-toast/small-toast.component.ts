import { Component, OnInit, Input } from '@angular/core';
import { CartProduct } from '../../../core/models/commerce/cart-product.model';
import { ShoppingCart } from '../../../core/models/commerce/shopping-cart.model';

@Component({
  selector: 'app-small-toast',
  templateUrl: './small-toast.component.html',
  styleUrls: ['./small-toast.component.less']
})
export class SmallToastComponent implements OnInit {

  @Input() shoppingCart: ShoppingCart;

  constructor() { }

  ngOnInit(): void { }

}
