import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../../shared/shared.module';
import { CartService } from './../../../services/cart.service';
import { OrderSummaryService } from './../../../services/order-summary.service';
import { Shopping } from './../../../models/shopping/shopping.model';
import { Summary } from './../../../models/summary/summary.model';
import { RouterModule } from '@angular/router';
import { ListProductCartComponent } from './../../components/list-product-cart/list-product-cart.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule, SharedModule, RouterModule, ListProductCartComponent],
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit{

  shoppingCart!: Shopping[];

  summary:Summary|null = null;

  constructor(
    private cartService:CartService,
    private orderService: OrderSummaryService,
    private router:Router
  ){ }

  ngOnInit() {
    this.cartService.cart
      .subscribe(data => {
        this.shoppingCart = data;
        this.orderSummary();
      });

    }

  orderSummary(){
    this.orderService.calculate(this.shoppingCart)
      .subscribe( data => {
        this.summary = data;
      });
  }

  navigate(){
    this.router.navigate(['/checkout-forms']);
  }


}
