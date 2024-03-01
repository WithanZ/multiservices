import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import {FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CookieService} from "ngx-cookie";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatDialogModule} from "@angular/material/dialog";
import {HttpClientModule} from "@angular/common/http";

import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../envirement/environment";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule,


    MatSnackBarModule,
    MatDialogModule,
    MatProgressSpinner,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,


  ],
  providers: [
    provideClientHydration(),
    CookieService,
    provideAnimationsAsync()
  ],
  exports: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
