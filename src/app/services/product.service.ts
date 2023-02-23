import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from './../models/product/product.model';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { HandleService } from './handle.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = 'https://fakestoreapi.com/products';

  constructor(
    private http: HttpClient,
    private handle: HandleService
  ) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url).pipe(
      retry(3),
      catchError((error:HttpErrorResponse) => {
        return this.handle.handleError(error);
      })
    )
  }

  getOne(id:number): Observable<Product> {
    return this.http.get<Product>(`${this.url}/${id}`).pipe(
      retry(3),
      catchError((error:HttpErrorResponse) => {
        return this.handle.handleError(error);
      })
    )
  }

}














