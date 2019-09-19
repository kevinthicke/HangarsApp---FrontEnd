import { RawProduct, ProductExtended } from '../../app/core/models/product.model';

export interface ProductState {
  products: RawProduct[] | ProductExtended[];
  hangarSelectedName: string;
  pending: boolean;
}
