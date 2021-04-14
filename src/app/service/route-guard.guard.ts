import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication/authentication.service';


@Injectable({
  providedIn: 'root'
})
export class RouteGuardGuard implements CanActivate {
  constructor(private route: Router, private jwt: AuthenticationService){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.jwt.isLoggedIn()) return true;
    console.log('logged in ',this.jwt.isLoggedIn())
    this.route.navigate(['']);
    return false;
  }
  
}
