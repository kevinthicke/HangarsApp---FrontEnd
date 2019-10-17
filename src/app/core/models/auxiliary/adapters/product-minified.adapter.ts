import { Deserializer } from '../deserializer';
import { ProductMinified } from '../../product/product-minified';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductMinifiedAdapter implements Deserializer<ProductMinified> {

  deserialize(obj: any): ProductMinified {

    const {
      id,
      name,
      prices } = obj;

    let price = Array.isArray(prices)
      ? prices[prices.length -1].price
      : null;

    return new ProductMinified(id, name, price);

  }

}
