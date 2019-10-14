import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map, withLatestFrom } from 'rxjs/operators';
import { ProductHangarIds } from 'src/app/core/models/auxiliary/product-hangar-ids.model';
import { LoadProductDetailsAction, ProductActions, ResetProductStateAction } from '../actions/product.action';
import { AppState } from '../state/index';

@Injectable({
  providedIn: 'root'
})
export class RouterEffects {

  constructor(private actions$: Actions,
              private store$: Store<AppState>) { }

  @Effect() loadProductDetails$: Observable<ProductActions> = this.actions$.pipe(
    ofType(ROUTER_NAVIGATION),

    filter((action: any) => {
      return (
        action.payload.routerState.url.includes('/products/details') ||
        action.payload.routerState.url.includes('/products/modify')
      );
    }),
    withLatestFrom(this.store$.select('product', 'hangarSelected')),

    map(([ action, hangarSelected ]) => {
      const hangarId: number = hangarSelected.id;
      const productId: number = +action.payload.routerState.params.id;

      return new LoadProductDetailsAction(new ProductHangarIds(hangarId, productId));
      })
    );

  @Effect() resetProductState$: Observable<ProductActions> = this.actions$.pipe(
    ofType(ROUTER_NAVIGATION),
    filter((action: any) => action.payload.routerState.url.includes('/products/insert')),
    map((action: any) => new ResetProductStateAction())
  )

}
