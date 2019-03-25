import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormGroup , FormControl } from '@angular/forms';
import { LoginresultModel } from 'src/app/models/login-result.model';
import { AuthService } from 'src/app/service/auth/auth.service';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @Output() onLoginEvent: EventEmitter<LoginresultModel>;
    
  form: FormGroup;

  constructor( private auth: AuthService) { 
    this.onLoginEvent = new EventEmitter<LoginresultModel>();

  }
  ngOnInit(){
    this.form = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  }

  onLoginSubmit(formValues: any){

    if(this.auth.login(formValues.username, formValues.password)){
      this.auth.startSession();

      this.onLoginEvent.emit({
        success:true
      });
    }
    else{
      this.onLoginEvent.emit({
        success: false,
        messange: 'invaled loding details',
      }); 
    }
  }
 

}
