import { CartProduct } from './cart-product.model';

export class ShoppingCart {

  public cart: CartProduct[];
  public totalPrice: number;

  constructor() {
    this.cart = [];
    this.totalPrice = 0;
  }

}
