
import { ProductMinified } from './product-minified';
import { Deserializable } from '../auxiliary/deserializable.model';

export class Product extends ProductMinified implements Deserializable {

  public description: string;
  public price: number;
  public quantity: number;
  public hangarId: number

  deserialize(obj: any): this {

    const { id, name, description, prices, quantity, hangarId } = obj;

    super.id = id;
    super.name = name;

    this.description = description;
    this.price = prices[prices.length -1].price;
    this.quantity = quantity ? quantity: null;
    this.hangarId = hangarId ? hangarId: null; 

    return this;
  } 

}


