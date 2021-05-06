import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
data = false;
message = "";
  constructor(public dialog: MatDialog,private service:HttpService) { }

  ngOnInit(): void {
  }
  close(){
    this.data = false;
    this.service.onClose.next(false)
    this.dialog.closeAll();
  }
  accept(){
    this.data = true;
    this.service.onClose.next(true)
    this.dialog.closeAll();
  }
}
