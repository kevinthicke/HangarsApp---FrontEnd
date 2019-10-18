import { Injectable } from '@angular/core';
import { Adapter } from '../adapter';
import { Product } from '../../product/product.model';
import { ProductDto } from '../dto/product-dto.model';
import { Deserializer } from '../deserializer';
import { Price } from '../../price.model';

@Injectable({
  providedIn: 'root'
})
export class ProductAdapter implements Adapter<Product, ProductDto>, Deserializer<Product> {

  deserialize(obj: any): Product {

      const {
        id,
        name,
        description,
        prices,
        quantity,
        hangarId } = obj;

      let price = Array.isArray(prices)
        ? prices[prices.length -1].price
        : null;

      return new Product(name, price, description, quantity, hangarId, id);

  }

  adapt(obj: Product): ProductDto {

    const {
      id,
      name,
      description,
      price,
      quantity } = obj;

    let prices: Price[] = [{ price: price }];

     return { id, name, description, prices, quantity };
  }

}
