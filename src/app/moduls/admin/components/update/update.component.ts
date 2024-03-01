import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PostService} from "../../../shared/services/post.service";
import {SnakService} from "../../../shared/services/snak.service";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
  customerid ='';



  constructor(private  posts:PostService,private snack:SnakService) {
  }

  ngOnInit() {

  }
  form =new FormGroup({
    id:new FormControl('',[Validators.required,Validators.maxLength(111)]),
    userid:new FormControl('',Validators.required),
    title:new FormControl('',Validators.required),
   body:new FormControl('',Validators.required)
  });



  update() {


  }
  searchcusto() {



  }
}
