import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  apiUrl:string = "https://dummyjson.com/carts";

  constructor(private http:HttpClient) { }

  getProducts():Observable<any>{
    return this.http.get(this.apiUrl);
  }


}
