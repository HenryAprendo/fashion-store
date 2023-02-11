import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Summary } from '../models/summary/summary.model';
import { Shopping } from './../models/shopping/shopping.model';


const ESTIMATE = 5;

@Injectable({
  providedIn: 'root'
})
export class OrderSummaryService {

  constructor() { }

  calculate(shoppingCart:Shopping[]): Observable<Summary | null> {
    const subtotal = shoppingCart
      .map(item => item.amount * item.product.price)
      .reduce((acc,actual) => acc + actual, 0)

    if(subtotal > 0){
      const taxes = subtotal * .19;
      const total = subtotal + taxes + ESTIMATE;

      const summary:Summary = {
        total: total,
        subtotal: subtotal,
        taxes: taxes,
        shipment: ESTIMATE
      }

      return of(summary);
    }
    else{
      return of(null);
    }
  }


}
