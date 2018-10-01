import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getTime() {
    return this.http.get('https://mysterious-sierra-92484.herokuapp.com/time');
  }
}
