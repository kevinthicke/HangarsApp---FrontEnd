import { Product_Orders } from './product_orders.model';
import { ShoppingCart } from '../commerce/shopping-cart.model';

export class Order {

  private product_orders: Product_Orders[];
  private totalPrice: number;

  constructor(shoppingCart: ShoppingCart) {

    this.product_orders = shoppingCart['cart'].map(productCart => new Product_Orders(productCart))
    this.totalPrice = +shoppingCart.totalPrice.toFixed(2);

  }

}
