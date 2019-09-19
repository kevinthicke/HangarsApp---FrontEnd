import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RawProduct, Product, ProductExtended } from '../models/product.model';
import { Observable } from 'rxjs';
import { Price } from '../models/price.model';
import { Page } from '../models/page.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'http://localhost:3011/api/products';

  constructor(private http: HttpClient) { }

  public getProducts(page: number = 0, size: number = 10): Observable<Page <RawProduct> > {
    return this.http.get<Page <RawProduct> >(`${ this.url }?page=${ page }&size=${ size }`);
  }

  public getProductById(id: number): Observable<RawProduct> {
    return this.http.get<RawProduct>(`${ this.url }/${ id }`);
  }

  public getProductByName(name: string): Observable<RawProduct> {
    return this.http.get<RawProduct>(`${ this.url}/?name=${ name }`);
  }

  public getProductsByHangarName(name: string): Observable<ProductExtended[]> {
    return this.http.get<ProductExtended[]>(
      `http://localhost:3011/api/hangars/products/by-name?name=${ name }`
    );
  }

  public insertProduct(product: Product): Observable<RawProduct> {
    return this.http.post<RawProduct>(`${ this.url }`, product);
  }

  public insertPrice(productId: number, price: Price): Observable<Product> {
    return this.http.post<Product>(`http://localhost:3011/api/products/new-price/${ productId }`, price);
  }

  public setProductQuantity(hangarId: number, productId: number, quantity: number): Observable<any> {
    return this.http.post<any>(`${ this.url }/set-quantity?hangar_id=${ hangarId }&product_id=${ productId }&quantity=${ quantity }`, null);
  }
}
