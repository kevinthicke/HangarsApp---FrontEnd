import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService {

  constructor(private router: Router,
              private authenticationService: AuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if(this.authenticationService.isUserLoggedIn()) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
