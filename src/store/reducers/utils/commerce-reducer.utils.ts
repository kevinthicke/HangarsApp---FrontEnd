import { ShoppingCart } from '../../../app/core/models/commerce/shopping-cart.model';
import { CartProduct } from '../../../app/core/models/commerce/cart-product.model';
import { idsMatch } from '../../utils/commerce.util';

const productCartIndex = (shoppingCart: ShoppingCart, cartProduct: CartProduct): number => (
  shoppingCart['cart'].findIndex(cp => idsMatch(cartProduct, cp))
)

function modifyCartProductQuantity(shoppingCart: ShoppingCart, cartProduct: CartProduct, quantityAdded: -1 | 1): Array<CartProduct> {

  const index = productCartIndex(shoppingCart, cartProduct);

  const { cart } = shoppingCart;
  const cartProductUpdated = { ...cart[index], quantity: cart[index].quantity + quantityAdded };

  return [
      ...cart.slice(0, index),
      cartProductUpdated,
      ...cart.slice(index + 1)
    ];
}

export function insertInShoppingCart(shoppingCart: ShoppingCart, cartProduct: CartProduct): ShoppingCart {

  const index = productCartIndex(shoppingCart, cartProduct);

  const existsInCart: boolean = index >= 0;

  if (existsInCart) {
    shoppingCart['cart'] = modifyCartProductQuantity(shoppingCart, cartProduct, + 1);
  } else {
    shoppingCart['cart'].push(cartProduct);
  }

  shoppingCart['totalPrice'] += cartProduct['productMinified'].price
  shoppingCart['totalPrice'] = +shoppingCart['totalPrice'].toFixed(2);

  return shoppingCart;

}

export function removeFromShoppingCart(shoppingCart: ShoppingCart, cartProduct: CartProduct): ShoppingCart {

  const isLastCartproductInCart: boolean = cartProduct.quantity === 1;

  if (isLastCartproductInCart) {
    const index = productCartIndex(shoppingCart, cartProduct);
    shoppingCart['cart'] = [ ...shoppingCart['cart'].slice(0, index), ...shoppingCart['cart'].slice(index + 1) ];
  } else {
    shoppingCart['cart'] = modifyCartProductQuantity(shoppingCart, cartProduct, - 1);
  }

  shoppingCart['totalPrice'] -= cartProduct['productMinified'].price;
  shoppingCart['totalPrice'] = +shoppingCart['totalPrice'].toFixed(2);

  return shoppingCart;

}
