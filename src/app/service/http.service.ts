import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BroadcastData } from '../object.service';
import { SMS_CALL } from './../authentication/app.constant';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

   
  constructor(private httpService: HttpClient,private route:Router) { }
  login(broacast:BroadcastData){
    const headers= new HttpHeaders().set('cmd',"SEND_BROADCAST_SMS")
    return this.httpService.post<any>(`${SMS_CALL}`,BroadcastData,{ 'headers': headers });
  }
}
