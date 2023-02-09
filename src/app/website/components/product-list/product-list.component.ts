import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './../product/product.component';
import { Product } from './../../../models/product/product.model';
import { CartService } from './../../../services/cart.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  template: `
    <div class="justify-items-center grid grid-cols-1 gap-y-8 p-2 sm:grid-cols-3 lg:grid-cols-4">
      <app-product
        *ngFor="let product of products"
        [product]="product"
        (addEv)="addProductCart($event)"
      >
      </app-product>
    </div>
  `,
  styles: [
  ]
})
export class ProductListComponent {
  @Input() products!: Product[];

  constructor(private cartService: CartService){ }

  addProductCart(product:Product) {
    this.cartService.addCart(product);
  }

}
