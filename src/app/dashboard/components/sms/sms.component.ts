import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { excelName } from 'src/app/authentication/app.constant';
import { TOKEN } from 'src/app/authentication/authentication.service';
import { BroadcastData, Email } from 'src/app/object.service';
import { ExcelService } from 'src/app/service/excel.service';
import { HttpService } from 'src/app/service/http.service';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.css']
})
export class SmsComponent implements OnInit {
  contant: string[];
  emailList:string[];
  message:string;
  data:any;
  emailData:any;
  broacast = new BroadcastData("GTTest","",[]);
  email = new Email("","",[]);
  constructor(private excelService:ExcelService,private service:HttpService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.message = "";
    this.contant = [""];
    this.emailList = [""]
  }
  excelread(e){
    this.excelService.excelread(e);
    this.excelService.excel.subscribe( async res  =>{
      this.data = res;
      console.log("data in error ",this.data)
      },
      error =>{
        console.log("data in error ",error)
      }
      )
  }

  sendSms(){
    const data = this.data;
    for (let i = 0; i < data.length; i++) {
     this.contant.push(data[i].phoneNumber);
     this.broacast.msisdns = this.contant.slice(1);
    }
    this.service.sendSms(this.broacast).subscribe(res =>{
    console.log("before request",res)
    },
    err =>{
      console.log("before request",this.broacast)
      console.log(err)
    })
  }

  sendEmail(){
    this.service.onCloseDate.subscribe(res =>{
      if(res == true){
        const data = this.data;
        for (let i = 0; i < data.length; i++) {
         this.emailList.push(data[i].EMAIL);
        console.log("--email list",this.emailList)
         this.email.recipients = this.emailList.slice(1);
        }
        this.service.sendEmail(this.email).subscribe(res =>{
        console.log("before request",res)
        },
        err =>{
          console.log("before request",this.broacast)
          console.log(err)
        })
      }else{

      }
    })

  }

  openDialog(){
    this.dialog.open(AlertComponent)
  }
  
}
