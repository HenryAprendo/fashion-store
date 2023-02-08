import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from './../models/product/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  getOne(id:number): Observable<Product> {
    return this.http.get<Product>(`${this.url}/${id}`);
  }


}
