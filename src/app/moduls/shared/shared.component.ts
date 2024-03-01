import { Component } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrl: './shared.component.css'
})
export class SharedComponent {
  constructor(private title:Title) {
  }

}
