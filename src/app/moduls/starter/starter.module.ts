import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarterRoutingModule } from './starter-routing.module';
import { StarterComponent } from './starter.component';
import { StarterHeaderComponent } from './component/starter-header/starter-header.component';
import { StarterFooterComponent } from './component/starter-footer/starter-footer.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { ProductsComponent } from './component/products/products.component';



@NgModule({
  declarations: [
    StarterComponent,
    StarterHeaderComponent,
    StarterFooterComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent
  ],
    imports: [
        CommonModule,
        StarterRoutingModule,

    ]
})
export class StarterModule { }
