import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {HttpClient} from "@angular/common/http";
import {response} from "express";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

   constructor(private title:Title) {
   }
   ngOnInit(){

     this.title.setTitle('security|Register')
   }
}
