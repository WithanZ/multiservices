import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PostService} from "../../../shared/services/post.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  customerid ='';

  list: Array<any> = [];

  constructor(private posts:PostService,private http:HttpClient) {
  }

  ngOnInit() {

  }

  searchcusto() {


  }
}
