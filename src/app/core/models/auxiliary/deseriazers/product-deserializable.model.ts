import { Deserializable } from './deserializable.model';
import { Product } from '../../product/product.model';

export class ProductDeserializable implements Deserializable<Product> {
  
  private product: Product;
  
  deserialize(obj: any): Product {
    
    const { 
      id, 
      name, 
      description, 
      prices, 
      quantity, 
      hangarId 
    } = obj;

    this.product.id = id;
    this.product.name = name;

    this.product.description = description;
    this.product.price = prices[prices.length -1].price;
    this.product.quantity = quantity ? quantity: null;
    this.product.hangarId = hangarId ? hangarId: null; 

    return this.product;

  }

}