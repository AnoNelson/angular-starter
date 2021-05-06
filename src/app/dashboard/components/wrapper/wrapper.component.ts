import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import {MatDialog} from '@angular/material/dialog';
import { AlertComponent } from '../alert/alert.component';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {
  isExpandable:boolean;
  response:boolean;
  constructor(private service:AuthenticationService,public dialog: MatDialog,public httpService:HttpService) { }

  ngOnInit(): void {
  }

  logout(){
    this.service.logout()
  }
  openDialog() {
    const dialogRef = this.dialog.open(AlertComponent);
  }
  onClose(){
    this.httpService.onCloseDate.subscribe(res =>{

    })
  }
}
