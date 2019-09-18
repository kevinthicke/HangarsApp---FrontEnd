import { Product, RawProduct } from '../../app/core/models/product.model';

export interface ProductState {
  products: RawProduct[];
  pending: boolean;
}

