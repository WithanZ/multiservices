import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecurityComponent } from './security.component';
import {LoginheaderComponent} from "./component/loginheader/loginheader.component";
import {LoginfooterComponent} from "./component/loginfooter/loginfooter.component";
import {LoginFormComponent} from "./component/login-form/login-form.component";
import {RegisterComponent} from "./component/register/register.component";

const routes: Routes = [{ path: '', component: SecurityComponent,children:[
    {path:'loginheader',component:LoginheaderComponent},
    {path:'loginfooter',component:LoginfooterComponent},
    {path:'loginform',component:LoginFormComponent},
    {path:'register',component:RegisterComponent}
  ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
