import { Price } from '../../price.model';

export class ProductDto {
  public id: number;
  public name: string;
  public description: string;
  public prices: Array<Price>;
  public quantity: number;
}
