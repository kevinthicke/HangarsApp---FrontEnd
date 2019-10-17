

export class Product   {

  public id?: number;
  public name: string;
  public price: number;
  public description: string;
  public quantity: number;
  public hangarId: number;

  constructor(
    name: string,
    price: number,
    description: string,
    quantity: number,
    hangarId: number,
    id?: number
  ) {

    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.quantity = quantity;
    this.hangarId = hangarId;

  }

}
