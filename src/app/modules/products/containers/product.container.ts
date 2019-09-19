import { Component, OnInit } from '@angular/core';
import { ProductFacade } from '../../../../store/facades/product.facade';
import { Observable } from 'rxjs';
import { ProductExtended, RawProduct } from '../../../core/models/product.model';
import { HangarFacade } from '../../../../store/facades/hangar.facade';
import { ShoppingCartFacade } from '../../../../store/facades/shopping-cart.facade';

@Component({
  selector: 'app-product-container',
  templateUrl: './product.container.html',
  styleUrls: ['./product.container.less']
})
export class ProductContainer implements OnInit {

  products$: Observable<ProductExtended[] | RawProduct[]>;
  hangarsName$: Observable<string[]>;

  constructor(
    private productFacade: ProductFacade,
    private hangarFacade: HangarFacade,
    private shoppingCartFacade: ShoppingCartFacade
  ) { }

  ngOnInit(): void {

    this.hangarFacade.loadHangarsName();
    this.hangarsName$ = this.hangarFacade.hangarsName$;

    this.productFacade.loadProducts();
    this.products$ = this.productFacade.products$;
  }

  setHangarSelectedName(hangarName: string): void {
    this.productFacade.setHangarSelectedName(hangarName);
  }

  removeHangarSelected(): void {
    this.productFacade.loadProducts();
  }

  handleIncrementProductCounterEmitter(): void {
    this.shoppingCartFacade.increaseProductCounter();
  }

  handleDecrementProductCounterEmitter(): void {
    this.shoppingCartFacade.decreaseProductCounter();
  }

}
