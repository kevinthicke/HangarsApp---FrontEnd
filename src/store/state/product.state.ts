import { Product, RawProduct } from '../../app/core/models/product.model';

export interface ProductState {
  products: RawProduct[];
  hangarSelectedName: string;
  pending: boolean;
}

