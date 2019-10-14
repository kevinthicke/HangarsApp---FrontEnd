import { ProductMinified } from '../product/product-minified';
import { HangarMinified } from '../hangar/hangar-minified.model';

export class CartProduct {

  public productMinified: ProductMinified;
  public hangarMinified: HangarMinified;
  public quantity: number;

  constructor(productMinified: ProductMinified, hangarMinified: HangarMinified) {
    this.productMinified = productMinified;
    this.hangarMinified = hangarMinified;

    this.quantity = 1;
  }

}
