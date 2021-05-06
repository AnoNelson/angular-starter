import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouteGuardGuard } from '../service/route-guard.guard';
import { SmsComponent } from './components/sms/sms.component';
import { EmailComponent } from './components/email/email.component';
import { HistoryComponent } from './components/history/history.component';

const routes :Routes = [
 {
     path:'',
     component:WrapperComponent,
     canActivate:[RouteGuardGuard],
     children:[
       {
         path:'sms',
         component:SmsComponent,
       },
       {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'email',
        component:EmailComponent
      },
      {
        path:'history',
        component:HistoryComponent
      },
      {
        path:'**',
        redirectTo:'/dash/sms',
        pathMatch:'full'
      }
     ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
