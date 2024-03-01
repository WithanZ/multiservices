import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserpageRoutingModule } from './userpage-routing.module';
import { UserpageComponent } from './userpage.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {FormsModule} from "@angular/forms";
import {CookieService} from "ngx-cookie";


@NgModule({
  declarations: [
    UserpageComponent,
    HeaderComponent,
    FooterComponent,

  ],
  imports: [
    CommonModule,
    UserpageRoutingModule,
    FormsModule
  ]
})
export class UserpageModule { }
