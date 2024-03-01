import { Component } from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {PostService} from "../../../shared/services/post.service";
import {SnakService} from "../../../shared/services/snak.service";
import Post from "../../../../dto/Post";

@Component({

  selector: 'app-savecustomer',
  templateUrl: './savecustomer.component.html',
  styleUrl: './savecustomer.component.css',


})
export class SavecustomerComponent {

     constructor(private postService:PostService  ,private snak:SnakService,private http:HttpClient) {
     }

   form =new FormGroup({
     fname:new FormControl('',[Validators.required,Validators.maxLength(5)]),
     lname:new FormControl('',Validators.required),
     address:new FormControl('',Validators.required),
     email:new FormControl('',Validators.required)
     });




  savecus() {
    let post =new Post(
      this.form.get('fname')?.value!,
        this.form.get('lname')?.value!,
        this.form.get('address')?.value!,
        this.form.get('email')?.value!
    );
    this.postService.createDataFireStore(post);

  }
}
