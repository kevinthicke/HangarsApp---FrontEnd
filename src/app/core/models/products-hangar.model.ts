import { Deserializable } from './auxiliary/deserializable.model';

export class ProductsHangar implements Deserializable {

  hangar_id: number;
  product_id: number;
  quantity: number;

  deserialize(obj: any): this {
    const { hangar_id, product_id, quantity } = obj;

    this.hangar_id = hangar_id;
    this.product_id = product_id;
    this.quantity = quantity;

    return this;
  }

}
