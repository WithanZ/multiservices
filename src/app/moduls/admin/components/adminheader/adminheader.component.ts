import { Component } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrl: './adminheader.component.css'
})
export class AdminheaderComponent {
constructor(private title:Title) {
}
  ngOnInit(){
  this.title.setTitle('admin|save')
  }
   time = new Date("2022-03-25");
}
