import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthorizationHttpInterceptService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const isValidUsernameAndToken = sessionStorage.getItem('username') && sessionStorage.getItem('token');

    if (isValidUsernameAndToken) {
      req = req.clone({
        setHeaders: {
          Authorization: sessionStorage.getItem('token')
        }
      });
    }

    return next.handle(req);

  }
}
