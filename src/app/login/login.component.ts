import { Component, OnInit } from '@angular/core';
import { ɵangular_packages_platform_browser_platform_browser_d } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  username:String;
  password:String;
  msg:String=" ";
  login():void
{
  if(this.username==="nutan" && this.password==="nutan@123" ){
    this.msg="Login successfull"
  }

  else{
    this.msg="Invalid username or password";
  }


}

}
