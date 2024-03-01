import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarterComponent } from './starter.component';
import {HomeComponent} from "./component/home/home.component";
import {ProductsComponent} from "./component/products/products.component";


const routes: Routes = [
  {path:'',redirectTo:'/starter/home',pathMatch:'full'},
    { path: '', component: StarterComponent ,children:[
    { path:'home',component:HomeComponent },
    { path:'product',component:ProductsComponent},

  ]},
                       ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarterRoutingModule { }
