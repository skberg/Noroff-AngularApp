import { Component, OnInit } from '@angular/core';
import { LoginresultModel } from 'src/app/models/login-result.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-pages',
  templateUrl: './login-pages.component.html',
  styleUrls: ['./login-pages.component.scss']
})
export class LoginPagesComponent implements OnInit {

  loginErrorMessage: string = ''; 

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  login(loginResult: LoginresultModel){
    console.log(loginResult);
    if(!loginResult.success){
      this.loginErrorMessage = loginResult.messange;
    }else{
      this.router.navigate(['/dashboard']);
    }
  }

}
