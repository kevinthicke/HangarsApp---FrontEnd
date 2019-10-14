import { HangarMinified } from '../../app/core/models/hangar/hangar-minified.model';
import { ProductMinified } from '../../app/core/models/product/product-minified';
import { Product } from '../../app/core/models/product/product.model';

export interface ProductState {
  products: ProductMinified[];
  product: Product;
  hangarSelected: HangarMinified;
  pending: boolean;
}
