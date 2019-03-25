import { Injectable } from '@angular/core';
import { AccountModel } from 'src/app/models/account.model';
import {MOCK_ACCONUNT} from '../../mocks/account'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  account: any = {}
  

  constructor() { 
    this.account = MOCK_ACCONUNT;
  }


  public login(username: string, password: string): boolean {
    return this.account.username == username && this.account.password == password;
  }

  public startSession() {
    window.localStorage.setItem('token', 'Sl9123jL#!lkajds)8');
  }

  getAccount(){
    return this.account

  }
  isAuthorized(): Boolean | string{
      return window.localStorage.getItem('token');
  }

}
