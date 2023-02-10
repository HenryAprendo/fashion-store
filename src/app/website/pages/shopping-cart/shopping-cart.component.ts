import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from './../../../services/cart.service';
import { OrderSummaryService } from './../../../services/order-summary.service';
import { Shopping } from './../../../models/shopping/shopping.model';
import { Summary } from './../../../models/summary/summary.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit{

  shoppingCart!: Shopping[];

  summary!:Summary;

  constructor(
    private cartService:CartService,
    private orderService: OrderSummaryService
  ){ }

  ngOnInit() {
    this.cartService.cart
      .subscribe(data => {
        this.shoppingCart = data;
        if(data.length > 0){
          this.orderSummary();
        }
      });

    }

  orderSummary(){
    this.orderService.calculate(this.shoppingCart)
      .subscribe(data => {
        this.summary = data;
      })
  }

  remove(id:number){
    this.cartService.removeCart(id)
  }


}
