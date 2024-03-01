import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Title} from "@angular/platform-browser";
import {response} from "express";
import {MatSnackBar} from "@angular/material/snack-bar";
import {PostService} from "../../../shared/services/post.service";
import {SnakService} from "../../../shared/services/snak.service";

@Component({
  selector: 'app-listpage',
  templateUrl: './listpage.component.html',
  styleUrl: './listpage.component.css'
})
export class ListpageComponent implements OnInit{

  constructor(private title:Title,private  posts:PostService,private snack:SnakService) {

  }
  ngOnInit() {
    this.title.setTitle('admin|list');


  }

  delete(id:any) {
    if (confirm('Are you sure'+id)){

    }

  }
}
