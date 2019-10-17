import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ProductMinifiedAdapter } from '../models/auxiliary/adapters/product-minified.adapter';
import { ProductAdapter } from '../models/auxiliary/adapters/product.adapter';
import { Price } from '../models/price.model';
import { ProductMinified } from '../models/product/product-minified';
import { Product } from '../models/product/product.model';
import { ProductsHangar } from '../models/products-hangar.model';
import { HangarService } from './hangar.service';
import { ProductsHangarService } from './products-hangar.service';
import { endpoints } from './endpoints';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private productMinifiedAdapter: ProductMinifiedAdapter,
    private productAdapter: ProductAdapter,
    private http: HttpClient,
    private hangarService: HangarService,
    private productsHangarService: ProductsHangarService) { }

  public getProduct(hangarId: number, productId: number): Observable<Product> {

    let endpoint = endpoints.BASE_PRODUCT + '/' + productId.toString();

    return this.productsHangarService
      .loadProductsHangar(hangarId, productId)
      .pipe(
        switchMap(productsHangar => this.http.get(endpoint).pipe(
          map(productData =>  this.productAdapter.deserialize({...productData, quantity: productsHangar.quantity }))
          )
    ));
  }

  public getProductsByHangarId(hangarId: number): Observable<ProductMinified[]> {
    let endpoint = `http://localhost:3011/api/hangars/products/${ hangarId }`;

    return this.http.get<any[]>(endpoint).pipe(
      map(productsData => productsData.map(productData => {
          return this.productMinifiedAdapter.deserialize(productData);
        })
      )
    );

  }

  public fullSave(product: Product): Observable<any> {

    return this.insertProduct(product)
        .pipe(
          switchMap((productResp: Product) => this.hangarService.saveProductInHangar(product.hangarId, productResp.id)),
          switchMap((productsHangar: ProductsHangar) => {

            return this.setProductQuantity(
              productsHangar.hangar_id,
              productsHangar.product_id,
              productsHangar.quantity);
          })
        );

  }

 /*  public update(product: Product): Observable<any> {
    return this.http.put(`${ this.url }/${ product.id }`, product);
  } */

  public insertPrice(productId: number, price: Price): Observable<any> {
    return this.http.post<any>(`http://localhost:3011/api/products/new-price/${productId}`, price);
  }

  public setProductQuantity(hangarId: number, productId: number, quantity: number): Observable<any> {
    return this.http.post<any>(`${endpoints.BASE_PRODUCT}/set-quantity?hangar_id=${hangarId}&product_id=${productId}&quantity=${quantity}`, null);
  }

  /* Private methods */

  private insertProduct(product: Product): Observable<Product> {

    return this.http.post<Product>(
      endpoints.BASE_PRODUCT,
      this.productAdapter.adapt(product)
    );
  }


}
