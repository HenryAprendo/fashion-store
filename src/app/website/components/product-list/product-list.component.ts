import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './../product/product.component';
import { Product } from './../../../models/product/product.model';
import { CartService } from './../../../services/cart.service';
import { LoadingComponent } from './../../components/loading/loading.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, LoadingComponent ],
  template: `
    <div class="justify-items-center grid grid-cols-1 gap-y-8 p-2 sm:grid-cols-3 lg:grid-cols-4">

      <ng-container *ngIf="show; else load">
        <app-product
          *ngFor="let product of products"
          [product]="product"
          (addEv)="addProductCart($event)"
        >
        </app-product>
      </ng-container>

      <ng-template #load>
        <ng-container *ngFor="let item of array">
          <app-loading></app-loading>
        </ng-container>
      </ng-template>

    </div>
  `,
  styles: [
  ]
})
export class ProductListComponent {

  array:number[] = [1,2,3,4,5,6,7,8,9,10,11,12];

  @Input() products!: Product[];

  @Input() show!:boolean;

  constructor(private cartService: CartService){ }

  addProductCart(product:Product) {
    this.cartService.addCart(product);
  }

}
