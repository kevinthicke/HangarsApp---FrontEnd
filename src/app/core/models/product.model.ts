import { RawPrice, Price } from './price.model';

export interface Product {
  name: string;
  description: string;
  prices: Price[]
}

export interface RawProduct extends Product {
  id: number;
  prices: RawPrice[];
}

export interface ProductExtended extends Product {
  quantity: number;
}
