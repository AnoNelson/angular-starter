import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { BroadcastData, Email } from '../object.service';
import { EMAIL_CALL, SMS_CALL } from './../authentication/app.constant';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  onClose = new Subject();
  onCloseDate = this.onClose.asObservable();

  onMessage = new Subject();
  message = this.onClose.asObservable();
  
   
  constructor(private httpService: HttpClient,private route:Router) { }
  sendSms(broacast:BroadcastData){
    const headers= new HttpHeaders().set('cmd',"SEND_BROADCAST_SMS")
    return this.httpService.post<any>(`${SMS_CALL}`,BroadcastData,{ 'headers': headers });
  }

  sendEmail(email:Email){
    const headers= new HttpHeaders().set('cmd',"SEND_BROADCAST_SMS")
    return this.httpService.post<any>(`${EMAIL_CALL}`,email,{ 'headers': headers });
  }
}
