import { Price } from './price.model';

export interface ProductForm {
  name: string;
  description: string;
  prices: Price[];
  quantity: number;
}
