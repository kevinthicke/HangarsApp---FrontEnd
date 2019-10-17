
import { ProductMinified } from './product-minified';

export class Product extends ProductMinified  {

  constructor(
    id: number,
    name: string,
    price: number,
    public description: string,
    public quantity: number,
    public hangarId: number
  ) {

    super(id, name, price);
  }

}
