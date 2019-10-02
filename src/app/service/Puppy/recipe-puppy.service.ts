import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipePuppyService {

  constructor(private http: HttpClient) { }
  
  getPuppyData(){ 
  return this.http.get('https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/');
  }
}
