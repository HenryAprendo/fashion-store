import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from './../../../services/cart.service';
import { Shopping } from './../../../models/shopping/shopping.model';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit{

  shoppingCart!: Shopping[];

  constructor(
    private cartService:CartService,
  ){ }

  ngOnInit() {
    this.cartService.cart
      .subscribe(data => {
        this.shoppingCart = data;
      });

    }





}
