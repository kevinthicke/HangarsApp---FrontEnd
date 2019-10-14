import { Price } from './price.model';

export interface ProductForm {
  name: string;
  description: string;
  hangarId: number;
  prices: Price[];
  quantity: number;
}
