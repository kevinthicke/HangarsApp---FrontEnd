import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Page } from '../models/page.model';
import { Hangar } from '../models/hangar.model';
import { Observable, ObservableInput, throwError } from 'rxjs';
import { Product, ProductExtended } from '../models/product.model';
import { ProductsHangar } from '../models/products-hangar.model';
import { PaginableHangar } from '../models/paginableHangar.model';
import { retry, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HangarService {
  private url: string = "http://localhost:3011/api/";

  constructor(private http: HttpClient) {}

  public getHangars(page: number = 0, size: number = 10): Observable<PaginableHangar> {
    
    const url = `${ this.url }hangars`;

    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get<PaginableHangar>(url, { params });
  }

  public getHangarsNames(): Observable<string[]> {
    return this.http.get<string[]>(`${this.url}hangars/names`);
  }

  public getHangarById(id: number): Observable<Hangar> {
    return this.http.get<Hangar>(`${this.url}hangars/${id}`);
  }

  // TODO: Comprobar que devuelve una lista de hangars
  public getHangarByName(name: string): Observable<Hangar[]> {
    return this.http.get<Hangar[]>(`${this.url}hangars/by-name?name=${name}`);
  }

  /*
  public getHangarExactlyByName(name: string): Observable<Hangar> {
    return this.http.get<Hangar>(`${ this.url }hangars/exactly?name=${ name }`);
  }
  */

  public postHangar(hangar: Hangar): Observable<Hangar> {
    return this.http.post<Hangar>(`${this.url}hangars`, hangar);
  }

  public updateHangar(hangar: Hangar, id: number): Observable<Hangar> {
    return this.http.put<Hangar>(`${this.url}hangars/${id}`, hangar);
  }

  public deleteHangarById(id: number): Observable<Hangar> {
    return this.http.put<Hangar>(`${ this.url }hangars/safe-delete/${ id }`, null);
  }

  public getProductsByHangarName(name: string): Observable<ProductExtended[]> {
    return this.http.get<ProductExtended[]>(
      `http://localhost:3011/api/hangars/products/by-name?name=${ name }`
    );
  }

  public saveProductInHangarByhangarId(hangarId: number, product: Product): Observable<any> {
    return this.http.post<any>(
      `http://localhost:3011/api/hangars/${ hangarId }/products`,
      product
    );
  }

  public saveProductInHangarByHangarIdAndProductId(hangarId: number, productId: number): Observable<ProductsHangar> {
    return this.http.post<ProductsHangar>(
      `${ this.url }include?hangar_id=${ hangarId }&product_id=${ productId }`,
      null
    );

  }

}
