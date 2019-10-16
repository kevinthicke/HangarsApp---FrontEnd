import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap, catchError, tap } from 'rxjs/operators';
import { Page } from '../models/page.model';
import { Price } from '../models/price.model';
import { ProductMinified } from '../models/product/product-minified';
import { Product } from '../models/product/product.model';
import { ProductsHangarService } from './products-hangar.service';
import { ProductHangarIds } from 'src/app/core/models/auxiliary/product-hangar-ids.model';
import { HangarService } from './hangar.service';
import { ProductsHangar } from '../models/products-hangar.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'http://localhost:3011/api/products';

  constructor(
    private http: HttpClient,
    private hangarService: HangarService,
    private productsHangarService: ProductsHangarService) { }

  private obtainLastPrice(prices: Price[]): number {
    return prices[prices.length - 1 ].price;
  }

  public getProducts(page: number = 0, size: number = 10): Observable<Page<any>> {
    return this.http.get<Page<any>>(`${this.url}?page=${page}&size=${size}`);
  }

  //Verified
  public getProduct(hangarId: number, productId: number): Observable<Product> {

    let endpoint = `${ this.url }/${ productId }`;

    return this.productsHangarService
      .loadProductsHangar(hangarId, productId)
      .pipe(
        switchMap(productsHangar => this.http.get(endpoint).pipe(
          map(productData => new Product().deserialize({...productData, quantity: productsHangar.quantity }))
          )
    ));
  }

  public getProductByName(name: string): Observable<any> {
    return this.http.get<any>(`${this.url}/?name=${name}`);
  }

  //verified
  public getProductsByHangarId(id: number): Observable<ProductMinified[]> {
    let endpoint = `http://localhost:3011/api/hangars/products/${ id }`;

    return this.http.get<any[]>(endpoint).pipe(
      map(productsData => {
        return productsData.map(productData => {
          const price = this.obtainLastPrice(productData.prices);

          return new ProductMinified().deserialize({ ...productData, price })
        })
      })
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
        )

  }

  //verified
  public getLastPrice(productId: number): Observable<number> {
    const endpoint = `${ this.url }/last-price`;

    const params = new HttpParams()
      .set('id', productId.toString());

    return this.http.get(endpoint, { params }).pipe(
      map((priceData: any) => priceData.price)
    );

  }

/*
  public getProductsByHangarName(name: string): Observable<ProductMinified[]> {
    let endpoint = `http://localhost:3011/api/hangars/products/by-name?name=${name}`;

    return this.http.get(endpoint).pipe(
      map(productsData => {
        return productsData.map(productData => new ProductMinified().deserialize(productData))
      })
    );

  } */

  //verified ??
  public insertProduct(product: Product): Observable<any> {
    let { price, ...productParsed } = product;
    productParsed['prices'] = [{ price }];

    return this.http.post<any>(`${this.url}`, productParsed);
  }

  public update(product: Product): Observable<any> {
    return this.http.put(`${ this.url }/${ product.id }`, product);
  }

  public insertPrice(productId: number, price: Price): Observable<any> {
    return this.http.post<any>(`http://localhost:3011/api/products/new-price/${productId}`, price);
  }

  public setProductQuantity(hangarId: number, productId: number, quantity: number): Observable<any> {
    return this.http.post<any>(`${this.url}/set-quantity?hangar_id=${hangarId}&product_id=${productId}&quantity=${quantity}`, null);
  }
}
