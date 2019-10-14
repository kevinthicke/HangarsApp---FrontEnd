import { CartProduct } from '../../app/core/models/commerce/cart-product.model';

export function idsMatch(firstCartProduct: CartProduct, secondCartProduct: CartProduct): boolean {

  const productIdsMatch = firstCartProduct.productMinified.id === secondCartProduct.productMinified.id;
  const hangarIdsMatch = firstCartProduct.productMinified.id === secondCartProduct.productMinified.id;

  return productIdsMatch && hangarIdsMatch;
}
