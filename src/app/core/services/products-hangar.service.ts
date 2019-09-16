import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductExtended } from '../models/product.model';
import { HttpClient } from '@angular/common/http';

// TODO: Este servicio se utiliza??

@Injectable({
  providedIn: 'root'
})
export class ProductsHangarService {
  url = 'http://localhost:3011/api/';
  constructor(private http: HttpClient) { }

  loadHangarProductByHangarId(id: number): Observable<ProductExtended[]> {
    return this.http.get<ProductExtended[]>(`${ this.url }/hangars/products/${ id }`);
  }
}
