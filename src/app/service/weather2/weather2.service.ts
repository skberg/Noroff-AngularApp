import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Weather2Service {

  constructor(private http: HttpClient) {

   }
   getweahtaer(){
    return this.http.get('https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/44418/2013/4/27/');
  }
}
