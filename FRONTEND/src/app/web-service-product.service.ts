import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class WebServiceProductService {

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<Product[]>
  {
    const url = 'http://localhost:3000/products';
    return this.http.get<Product[]>(url);
  }
}
