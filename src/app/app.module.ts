import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationService } from './authentication/authentication.service';
import { RouteGuardGuard } from './service/route-guard.guard';
import { NgxSpinnerModule } from "ngx-spinner";
import { AppService } from './app.service';
import { ReadexcelDirective } from './directives/readexcel.directive';
import { AngularFileUploaderModule } from "angular-file-uploader";



registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ReadexcelDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxSpinnerModule,
    AngularFileUploaderModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US },AuthenticationService,AppService,RouteGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
