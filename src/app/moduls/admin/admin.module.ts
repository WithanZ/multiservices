import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminheaderComponent } from './components/adminheader/adminheader.component';
import { AdminfooterComponent } from './components/adminfooter/adminfooter.component';
import { ListpageComponent } from './components/listpage/listpage.component';
import {SecurityModule} from "../security/security.module";
import { SearchComponent } from './components/search/search.component';
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import { SavecustomerComponent } from './components/savecustomer/savecustomer.component';
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import { UpdateComponent } from './components/update/update.component';
import {MatDialog, MatDialogModule} from "@angular/material/dialog";


@NgModule({
  declarations: [
    AdminComponent,
    AdminheaderComponent,
    AdminfooterComponent,
    ListpageComponent,
    SearchComponent,
    SavecustomerComponent,
    UpdateComponent
  ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        SecurityModule,
      MatButtonModule,
      MatInputModule,
      FormsModule,
      ReactiveFormsModule,
      MatSnackBarModule,
      MatDialogModule


    ]
})
export class AdminModule { }
