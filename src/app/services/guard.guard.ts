import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class GuardGuard implements CanActivate, CanActivateChild {
  /**
   *
   */
  constructor(private auth: AuthService, private router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean|UrlTree{

    console.log('canActivate on '+route.url);
    if (this.auth.isLogged()){
      return true;
    }else{
      this.router.navigate(['login']);
      return false;
    }
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean|UrlTree{

    if (this.auth.isLogged()){
      return true;
    }else{
      this.router.navigate(['login']);
      return false;
    }
  }
}
