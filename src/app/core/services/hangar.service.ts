import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Hangar } from '../models/hangar.model';
import { HangarMinified } from '../models/hangar/hangar-minified.model';
import { HangarMinifiedPage } from '../models/hangar/paginable-minified-hangar.model';
import { ProductsHangar } from '../models/products-hangar.model';

@Injectable({
  providedIn: 'root'
})
export class HangarService {
  private url: string = "http://localhost:3011/api/";

  constructor(private http: HttpClient) {}

  public getHangars(page: number = 0): Observable< HangarMinifiedPage > {

    const size: number = 30;
    const url = `${ this.url }hangars`;

    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get(url, { params }).pipe(
      map(hangarsData => new HangarMinifiedPage().deserialize(hangarsData))
    );
  }

/*   public getHangarsNames(): Observable<HangarMinified[]> {
    const endpoint = `${ this.url }hangars/names`;

    return this.http.get(endpoint).pipe(
      map(hangarsData => {
        if (Array.isArray(hangarsData)) {
          return hangarsData.map(hangarData => new HangarMinified().deserialize(hangarData));
        }
      })
    );
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

  public postHangar(hangar: Hangar): Observable<Hangar> {
    return this.http.post<Hangar>(`${this.url}hangars`, hangar);
  }

  public updateHangar(hangar: Hangar, id: number): Observable<Hangar> {
    return this.http.put<Hangar>(`${this.url}hangars/${id}`, hangar);
  }

  public deleteHangarById(id: number): Observable<Hangar> {
    return this.http.put<Hangar>(`${ this.url }hangars/safe-delete/${ id }`, null);
  }


  public saveProductInHangarByhangarId(hangarId: number, product: any): Observable<any> {
    return this.http.post<any>(
      `http://localhost:3011/api/hangars/${ hangarId }/products`,
      product
    );
  }

  */

  public saveProductInHangar(hangarId: number, productId: number): Observable<ProductsHangar> {
    return this.http.post<ProductsHangar>(
      `${ this.url }include?hangar_id=${ hangarId }&product_id=${ productId }`,
      null
    );

  }
}
