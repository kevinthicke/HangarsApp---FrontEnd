import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { switchMap, tap } from 'rxjs/operators';
import { CommerceService } from 'src/app/core/services/commerce.service';
import { ShoppingCart } from '../../app/core/models/commerce/shopping-cart.model';
import { CommerceActionTypes } from '../actions/commerce.action';
import { AppState } from '../state';

@Injectable({
  providedIn: 'root'
})
export class CommerceEffects {

  constructor(
    private actions$: Actions,
    private commerceService: CommerceService,
    private store$: Store<AppState>,
    private router: Router,
  ) { }

   @Effect({ dispatch: false }) purchaseOrder$ = this.actions$.pipe(
    ofType(CommerceActionTypes.PURCHASE_ORDER),

    switchMap(() => this.store$.select('commerce', 'shoppingCart')),
    switchMap((shoppingCart: ShoppingCart) => {
      return this.commerceService.saveOrder(shoppingCart);
    }),
    tap(() => this.router.navigate(['products']))
   );

}
