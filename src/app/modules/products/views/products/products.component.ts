import { Component, EventEmitter, Input, OnInit, Output, HostBinding, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { fade } from 'src/app/shared/animations/fade.animation';
import { ShoppingCart } from '../../../../core/models/commerce/shopping-cart.model';
import { HangarMinified } from '../../../../core/models/hangar/hangar-minified.model';
import { ProductMinified } from '../../../../core/models/product/product-minified';
import { bounceInRight, bounceOutRight } from '../../../../shared/animations/bounce.animation';
import { pulse } from '../../../../shared/animations/pulse.animation';
import { trigger, state, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less'],
  animations: [ fade, pulse, bounceInRight, bounceOutRight,
    trigger('expandLeft', [
      state('closed', style({
          //transform: 'translateX(0)',
          background: 'red'
      })),
      state('opened', style({
          //transform: 'translateX(80vw)'
          background: 'green'
      })),
      transition('closed <=> opened', animate(300))
  ])
  ]
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
  isSmallToastRendered  : boolean = false;

  constructor(public router: Router) { }

  ngOnInit(): void { }

  handleHangarSelected(hangarMinified: HangarMinified): void {

    this.existsSelectedHangar = hangarMinified !== null;

    if (this.existsSelectedHangar) {
      this.hangarSelectedEmitter.emit(hangarMinified);
    }

  }

  changeSmallToastRenderState(): void {
    this.isSmallToastRendered = !this.isSmallToastRendered;
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

  enableShoppingMode(): void {
    this.isShoppingModeEnabled = true;
  }

  disableShoppingMode(): void {
    this.isShoppingModeEnabled = false;
  }

}
