import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ErrorFacade } from '../../../store/facades/error.facade';
import { Error } from '../models/auxiliary/error.model';

export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private errorFacade: ErrorFacade) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request)
      .pipe(
        retry(1),
        catchError((error: HttpErrorResponse) => {
          
          let message: string;
          let status: number;

          const isClientSideError = error.error instanceof ErrorEvent;

          if(isClientSideError) {
            status = 500;
            message = `Error: ${ error.error.message }`;
          } else {
            status = error.error.status;
            message = `Error ${ error.error.message }`;
          }

          let customError = new Error(status.toString(), message);
          this.errorFacade.renderizeError(customError);
          

          return throwError(customError);
        })
      );
  }
 }
