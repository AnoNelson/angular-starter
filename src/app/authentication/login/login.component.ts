import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/object.service';
import { AuthenticationService } from '../authentication.service';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  user = new User("","");
  constructor(private service:AuthenticationService,private router: Router,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  login(){
    this.spinner.show();
   this.service.login(this.user).subscribe(res =>{
     console.log(res);
     this.spinner.hide()
     this.router.navigate(['/dash'])
   },
   error =>{
     console.log("error ",error);
     this.spinner.hide()
   })
  }

}
