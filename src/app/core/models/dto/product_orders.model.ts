import { CartProduct } from '../commerce/cart-product.model';

export class Product_Orders {

  private hangar_id: number;
  private product_id: number;
  private quantity: number;

  constructor(cartProduct: CartProduct) {
    
    this.hangar_id = cartProduct['hangarMinified'].id;
    this.product_id = cartProduct['productMinified'].id;
    this.quantity = cartProduct.quantity;

  }
}