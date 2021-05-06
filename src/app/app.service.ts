import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sms } from './object.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpService: HttpClient) { }

  smsCall(sms:Sms[]){
    //this.httpService.post()
  }
}
