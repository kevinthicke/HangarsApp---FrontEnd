import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsHangar } from '../models/products-hangar.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsHangarService {
  url = 'http://localhost:3011/api';

  constructor(private http: HttpClient) { }

  loadProductsHangar(hangarId: number, productId: number): Observable<ProductsHangar> {
    let _endpoint = `${ this.url }/products-hangar`;

    const params = new HttpParams()
      .set('hangar_id', hangarId.toString())
      .set('product_id', productId.toString());

    return this.http.get(_endpoint, { params }).pipe(
      map(productsHangarData => new ProductsHangar().deserialize(productsHangarData))
    );
  }

  // TODO: Esto se utiliza??
  loadHangarProductByHangarId(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${ this.url }/hangars/products/${ id }`);
  }
}
