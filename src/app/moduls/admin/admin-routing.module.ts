import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import {AdminheaderComponent} from "./components/adminheader/adminheader.component";
import {AdminfooterComponent} from "./components/adminfooter/adminfooter.component";
import {ListpageComponent} from "./components/listpage/listpage.component";
import {SearchComponent} from "./components/search/search.component";
import {SavecustomerComponent} from "./components/savecustomer/savecustomer.component";
import {UpdateComponent} from "./components/update/update.component";

const routes: Routes = [{ path: '', component: AdminComponent,children:[
    {path:'adminHeader',component:AdminheaderComponent},
    {path:'adminfooter',component:AdminfooterComponent},
    {path:'list',component:ListpageComponent},
    {path:'search',component:SearchComponent},
    {path:'savecustomer',component:SavecustomerComponent},
    {path:'update',component:UpdateComponent}
  ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
