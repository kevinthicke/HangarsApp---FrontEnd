import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HangarFacade } from '../../../../../store/facades/hangar.facade';
import { ProductFacade } from '../../../../../store/facades/product.facade';
import { HangarMinified } from '../../../../core/models/hangar/hangar-minified.model';
import { ProductMinified } from '../../../../core/models/product/product-minified';
import { CommerceFacade } from '../../../../../store/facades/commerce.facade';
import { CartProduct } from '../../../../core/models/commerce/cart-product.model';

@Component({
  selector: 'app-product-container',
  templateUrl: './product.container.html',
  styleUrls: ['./product.container.less']
})
export class ProductContainer implements OnInit {

  productsMinified$: Observable<ProductMinified[]>;
  hangarsMinified$: Observable<HangarMinified[]>;

  hangarSelected: HangarMinified

  constructor(
    private productFacade: ProductFacade,
    private hangarFacade: HangarFacade,
    private commerceFacade: CommerceFacade
  ) { }

  ngOnInit(): void {

    this.hangarFacade.loadHangars(0);

    this.hangarsMinified$ = this.hangarFacade.hangarsMinified$;
    this.productsMinified$ = this.productFacade.productsMinified$;

  }

  handleHangarSelected(hangarMinified: HangarMinified): void {

    this.hangarSelected = hangarMinified;
    this.productFacade.setHangarSelectedName(this.hangarSelected);

  }

  handleAddToShoppingCartEmitter(productMinified: ProductMinified): void {

    let cartProduct: CartProduct = new CartProduct(productMinified, this.hangarSelected);
    this.commerceFacade.addToShoppingCart(cartProduct);

  }

}
