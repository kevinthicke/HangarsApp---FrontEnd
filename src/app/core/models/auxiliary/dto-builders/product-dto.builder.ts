import { Builder } from './builder.model';
import { Product } from '../../product/product.model';
import { ProductDto } from '../dto/product-dto.model';
import { Price } from '../dto/price-dto.model';

export class ProductDtoBuilder implements Builder<Product, ProductDto> {

  build(product: Product): ProductDto {
    
    let prices: Array<Price> = [ { price: product.price }];
    delete product.price;
    
    return { ... product, prices };

  }

}