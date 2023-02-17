import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductCartSummaryComponent } from './../../components/product-cart-summary/product-cart-summary.component';
import { CartService } from './../../../services/cart.service';
import { OrderSummaryService } from './../../../services/order-summary.service';
import { Shopping } from './../../../models/shopping/shopping.model';
import { Summary } from './../../../models/summary/summary.model';
import { } from './../../../models/shopping/shopping.model';

@Component({
  selector: 'app-checkout-forms',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ProductCartSummaryComponent],
  templateUrl: './checkout-forms.component.html',
  styleUrls: ['./checkout-forms.component.css']
})
export class CheckoutFormsComponent {

  shoppingCart!: Shopping[];

  summary:Summary|null = null;

  constructor(
    private cartService:CartService,
    private orderService: OrderSummaryService,
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

}
