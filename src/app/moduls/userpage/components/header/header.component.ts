import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

   constructor() {
   }

  public format = 'hh:mm tt';
  public date: Date = new Date();
}
