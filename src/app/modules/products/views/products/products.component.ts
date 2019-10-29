import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HangarMinified } from '../../../../core/models/hangar/hangar-minified.model';
import { ProductMinified } from '../../../../core/models/product/product-minified';
import { fade } from 'src/app/shared/animations/fade.animation';
import { ShoppingCart } from '../../../../core/models/commerce/shopping-cart.model';
import { trigger, transition, animate, keyframes, style } from '@angular/animations';
import { bounceInRight, bounceOutRight } from '../../../../shared/animations/bounce.animation';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less'],
  animations: [ fade, bounceInRight, bounceOutRight ]
})
export class ProductsComponent implements OnInit {

  @Input() products         : ProductMinified[];
  @Input() hangarsMinified  : HangarMinified[];
  @Input() shoppingCart     : ShoppingCart;

  @Output() hangarSelectedEmitter         = new EventEmitter<HangarMinified>();
  @Output() addToShoppingCartEmitter      = new EventEmitter<ProductMinified>();
  @Output() removeFromShoppingCartEmitter = new EventEmitter<ProductMinified>();

  existsSelectedHangar  : boolean = false;
  isShoppingModeEnabled : boolean = false;

  constructor(public router: Router) { }

  ngOnInit(): void { }

  handleHangarSelected(hangarMinified: HangarMinified): void {

    this.existsSelectedHangar = hangarMinified !== null;

    if (this.existsSelectedHangar) {
      this.hangarSelectedEmitter.emit(hangarMinified);
    }

  }

  changeShoppingMode(): void {
    this.isShoppingModeEnabled = !this.isShoppingModeEnabled;
  }

  handleCardLeftButtonClick(product: ProductMinified): void {

    this.isShoppingModeEnabled
      ? this.addToShoppingCartEmitter.emit(product)
      : this.router.navigate(['products', 'modify', product.id]);

  }

  handleCardRightButtonClick(product: ProductMinified): void {

    this.isShoppingModeEnabled
      ? this.removeFromShoppingCartEmitter.emit(product)
      : this.router.navigate(['products', 'details', product.id]);

  }

}
