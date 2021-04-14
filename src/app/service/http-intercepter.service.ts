import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from "@angular/common/http";
import { AuthenticationService,AUTHENTICATED_USER,TOKEN } from "../authentication/authentication.service";
@Injectable({
  providedIn: "root"
})
export class HttpIntercepterService implements HttpInterceptor {
  constructor(
    private basicAuth: AuthenticationService,
    private router: Router
  ) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let auth = "";//this.basicAuth.getToken();
    let username = "";// this.basicAuth.getUsername();

    if (auth && username) {
      req = req.clone({
        setHeaders: {
          Authorization: auth
        }
      });
    }

    // console.log(jwt_decode(sessionStorage.getItem(TOKEN)));
    // if (sessionStorage.getItem(TOKEN)) {
    //   let me = jwt_decode(sessionStorage.getItem(TOKEN)).exp;
    //   if (me.valueOf() < new Date().valueOf() / 1000) {
    //     sessionStorage.removeItem(TOKEN);
    //     sessionStorage.removeItem(AUTHENTICATED_USER);
    //     this.router.navigate(["/login"]);
    //   }
    // }
    return next.handle(req);
  }
}
