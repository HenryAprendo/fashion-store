import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product/product.model';
import { Shopping } from './../models/shopping/shopping.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // productos del carrito
  shoppingCart: Shopping[] = [];
  cart$ = new BehaviorSubject<Shopping[]>([]);
  cart = this.cart$.asObservable();

  constructor() { }

  addCart(product:Product){
    const shopping:Shopping = { product: product, amount: 1 }
    const index = this.shoppingCart.findIndex(item => item.product.id === product.id);

    if(index >= 0) {
      this.shoppingCart[index].amount += 1;
    }
    else {
      this.shoppingCart.push(shopping);
    }
    this.cart$.next(this.shoppingCart);
  }

  changeQuantity(shopping:Shopping){
    const quantity:number = shopping.amount;
    const index = this.shoppingCart.findIndex(item => item.product.id);
    if(index >= 0){
      this.shoppingCart[index].amount = quantity;
      this.cart$.next(this.shoppingCart);
    }
  }

  removeCart(id:number){
    const index = this.shoppingCart.findIndex(item => item.product.id === id);
    if(index >= 0){
      if(this.shoppingCart[index].amount > 0){
        this.shoppingCart[index].amount -= 1;
      }

      if(this.shoppingCart[index].amount === 0){
        this.shoppingCart.splice(index,1);
      }

      this.cart$.next(this.shoppingCart);
    }
  }





}







