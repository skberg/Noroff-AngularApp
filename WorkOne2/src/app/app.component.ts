import { Component } from '@angular/core';
import { AuthService } from './service/auth/auth.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private auth: AuthService, private router: Router ){
    if(this.auth.isAuthorized()){
      this.router.navigate(['/dashboard']);
    }else{
      this.router.navigate(['/login']);
    }
  }
}
