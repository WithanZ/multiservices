import { Component } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {Router} from "@angular/router";
import {AuthService} from "../../../shared/services/auth.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  password:string= '';
  email:string= '';
  constructor(private title:Title,private router:Router,private authService:AuthService) {
  }
  ngOnInit():void{
    this.title.setTitle('security|Login');
    if (this.authService.isExist('my-token')){
      this.router.navigateByUrl('/admin/list').then();
    }



  }

  login() {
    if (this.email==='cha@gmail.com' && this.password==='1234'){
      this.authService.createToken(this.email);
      this.router.navigateByUrl('/admin/list').then();
    }
    else {
      console.log("wrong")
      this.router.navigateByUrl('/security/login')
    }

  }
}
