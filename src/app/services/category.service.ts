import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from './../models/product/product.model';
import { catchError, Observable } from 'rxjs';
import { HandleService } from './handle.service';


export const CATEGORIES = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing"
]

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url = 'https://fakestoreapi.com/products/category';

  constructor(
    private http: HttpClient,
    private handler: HandleService
  ) { }

  getProductCategory(index:number): Observable<Product[]> {
    let category = CATEGORIES[index];
    return this.http.get<Product[]>(`${this.url}/${category}`).pipe(
      catchError((error:HttpErrorResponse) => {
        return this.handler.handleError(error);
      })
    )
  }








}









