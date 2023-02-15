import { Component, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCartComponent } from './../product-cart/product-cart.component';
import { Shopping } from './../../../models/shopping/shopping.model';
import { CartService } from './../../../services/cart.service';

@Component({
  selector: 'app-list-product-cart',
  standalone: true,
  imports: [CommonModule, ProductCartComponent],
  template: `
    <app-product-cart
      *ngFor="let item of productCarts"
      [productCart]="item"
      (removeEvt)="removeProductCart($event)"
      (addEvt)="quantityProductCart($event)"
    >
    </app-product-cart>
  `,
  styles: [
  ]
})
export class ListProductCartComponent {

  @Input() productCarts!:Shopping[];

  constructor(private cartService: CartService){ }

  removeProductCart(id:number){
    this.cartService.removeCart(id);
  }

  quantityProductCart(shopping:Shopping){
    this.cartService.changeQuantity(shopping);
  }

}









