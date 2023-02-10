import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Shopping } from './../models/shopping/shopping.model';

const ESTIMATE = 5;

@Injectable({
  providedIn: 'root'
})
export class OrderSummaryService {

  constructor() { }

  calculate(shoppingCart:Shopping[]){
    const subtotal = shoppingCart
      .map(item => item.amount * item.product.price)
      .reduce((acc,actual) => acc + actual, 0)

    const taxes = subtotal * .19;
    const total = subtotal + taxes;

    return of({
      total: total,
      subtotal: subtotal,
      taxes: taxes,
      shipment: ESTIMATE
    });
  }


}
