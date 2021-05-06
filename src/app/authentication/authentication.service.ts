import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../object.service';
import { LOGIN_URL } from './app.constant';
import { map } from "rxjs/operators";
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


export const TOKEN = "token";
export const AUTHENTICATED_USER = "authenticatedUser";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());
 
  constructor(private httpService: HttpClient,private route:Router) { }
  login(user:User){
    return this.httpService.post<any>(`${LOGIN_URL}`,user).pipe(
      map((data) => {
        sessionStorage.setItem(TOKEN, data.token);
        this.isLoginSubject.next(true);
        return data;
      })
    );;
  }
  logout(){
    sessionStorage.removeItem(TOKEN);
   this.isLoginSubject.next(false);
   this.route.navigate([''])
  }
  private hasToken() : boolean {
    console.log("checking .....",!!localStorage.getItem(TOKEN))
    return !!sessionStorage.getItem(TOKEN);
  }
  isLoggedIn():boolean {
    var looged = false;
   this.isLoginSubject.subscribe(
     res =>{
       console.log("result from ",res)
       looged = res;
     }
   )
   return looged;
   }
}
