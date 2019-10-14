import { Deserializable } from '../auxiliary/deserializable.model';


export class ProductMinified implements Deserializable {

  public id: number;
  public name: string;
  public price: number;

  constructor() { }

  deserialize(obj: any): this {
    const { id, name, price } = obj;

    this.id = id;
    this.name = name;
    this.price = +price.toFixed(2);

    return this;
  }
}
