import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse
 } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ErrorToastService } from '../services/error-toast.service';

export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private errorToastService: ErrorToastService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request)
      .pipe(
        retry(1),
        catchError((error: HttpErrorResponse) => {

          let errorMessage: string;
          const isClientSideError = error.error instanceof ErrorEvent;

          if(isClientSideError) {

            errorMessage = `Error: ${ error.error.message }`;
            this.errorToastService.renderize(500, error.message);

          } else {

            errorMessage = `Error Code: ${ error.error.status } \n Message: ${ error.error.message }`;
            this.errorToastService.renderize(error.error.status, error.error.message);

          }
          //TODO: esto sirve para algo??
          return throwError(errorMessage);
        })
      );
  }
 }
