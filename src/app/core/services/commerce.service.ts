import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ShoppingCart } from '../models/commerce/shopping-cart.model';
import { Order } from '../models/dto/order.model';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommerceService {

  url: string = 'http://localhost:3011/api/orders';

  constructor(private http: HttpClient) { }

  saveOrder(shoppingCart: ShoppingCart): Observable<any> {
   
    const httpHeaders = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Authorization': sessionStorage.getItem('token') 
    });
    console.log('hey!')

    //console.log(new Order(shoppingCart));
    
   /*  return this.http.post(
      this.url, 
      new Order(shoppingCart),  
      //{ headers: httpHeaders }
    ); */
    return this.http.post(this.url, new Order(shoppingCart));
  }

}
