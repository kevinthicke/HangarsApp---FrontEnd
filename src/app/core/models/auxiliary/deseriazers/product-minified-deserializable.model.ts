import { ProductMinified } from '../../product/product-minified';
import { Deserializable } from './deserializable.model';

export class ProductMinifiedDeserializable implements Deserializable<ProductMinified> {
  
  private productMinified: ProductMinified;
  
  deserialize(obj: any): ProductMinified {
    
    const { 
      id, 
      name,  
      prices, 
    } = obj;

    this.productMinified.id = id;
    this.productMinified.name = name;
    this.productMinified.price = prices[prices.length -1].price;

    return this.productMinified;

  }

}