import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotfoundComponent} from "./components/notfound/notfound.component";

const routes: Routes = [
    { path:'',redirectTo:'starter',pathMatch:'full'},


    { path: 'starter', loadChildren: () => import('./moduls/starter/starter.module').then(m => m.StarterModule) },
    { path: 'userpage', loadChildren: () => import('./moduls/userpage/userpage.module').then(m => m.UserpageModule) },
    { path: 'shared', loadChildren: () => import('./moduls/shared/shared.module').then(m => m.SharedModule) },
    { path: 'security', loadChildren: () => import('./moduls/security/security.module').then(m => m.SecurityModule) },
    { path: 'admin', loadChildren: () => import('./moduls/admin/admin.module').then(m => m.AdminModule) },



    { path:'**',component:NotfoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

