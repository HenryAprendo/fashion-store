import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './../models/product/product.model';


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
  ) { }

  getProductCategory(index:number){
    let category = CATEGORIES[index];
    return this.http.get<Product[]>(`${this.url}/${category}`);
  }








}









