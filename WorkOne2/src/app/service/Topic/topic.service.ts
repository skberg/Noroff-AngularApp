import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private http: HttpClient) { 
    
  }
  getTropical(){
    return this.http.get('http://api.worldbank.org/v2/topic?format=json');
  }
}
