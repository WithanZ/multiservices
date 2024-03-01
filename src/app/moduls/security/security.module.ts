import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { SecurityComponent } from './security.component';
import { LoginheaderComponent } from './component/loginheader/loginheader.component';
import { LoginFormComponent } from './component/login-form/login-form.component';
import { LoginfooterComponent } from './component/loginfooter/loginfooter.component';
import { RegisterComponent } from './component/register/register.component';
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {HttpClient, HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    SecurityComponent,
    LoginheaderComponent,
    LoginFormComponent,
    LoginfooterComponent,
    RegisterComponent
  ],
  exports: [
    LoginheaderComponent,
    LoginfooterComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    FormsModule,
    MatButtonModule,
    HttpClientModule
  ]
})
export class SecurityModule { }
