import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadingSpinnerService } from '../services/loading-spinner.service';
import { finalize } from 'rxjs/operators';

@Injectable()
export class HttpLoaderInterceptor implements HttpInterceptor {
  constructor(public loadingSpinnerService: LoadingSpinnerService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable< HttpEvent<any> > {
    this.loadingSpinnerService.show();

    return next
      .handle(req)
      .pipe(
        finalize(() => this.loadingSpinnerService.hide())
        );
  }

}
