import { RouterStateSerializer } from '@ngrx/router-store';
import { RouterStateUrl } from '../state/router.state';
import { RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {

  serialize(routerState: RouterStateSnapshot): RouterStateUrl {

    const { url } = routerState;
    const { queryParams } = routerState.root;

    let state: ActivatedRouteSnapshot = routerState.root;

    while (state.firstChild) { state = state.firstChild; }

    const { params } = state;

    return {
      url,
      queryParams,
      params
    };
  }

}
