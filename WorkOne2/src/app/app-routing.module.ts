import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPagesComponent } from './pages/login-pages/login-pages.component';
import { DachbordComponent } from './pages/dachbord/dachbord.component';

const routes: Routes = 
[ {
  path: 'login', 
  component: LoginPagesComponent
},{
  path: 'dashboard', 
  component: DachbordComponent
}
  ,{ 
    path: '', 
    redirectTo: '/login',
    pathMatch: 'full'
  }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
