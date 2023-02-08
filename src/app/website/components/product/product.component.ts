import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from './../../../models/product/product.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <article>
      <a class="hover:opacity-75 hover:cursor-pointer" [routerLink]="['./../detail', product.id]">
        <div class="w-64 sm:w-48 md:w-60 lg:w-72">
          <div class="h-72 border p-2 rounded-md">
            <img class="w-full h-full" [src]="product.image" alt="{{product.title}}">
          </div>
          <div class="p-1">
            <!-- <h3 class="text-gray-700 text-sm">{{product.title}}</h3> -->
            <p class="text-gray-900 font-semibold">$ {{product.price}}</p>
          </div>
        </div>
      </a>
      <button (click)="addProduct(product.id)" class="p-2 bg-gray-400 text-lg text-white font-medium w-full rounded-md hover:bg-gray-500 active:bg-gray-700">Add to bag</button>
    </article>
  `,
  styles: [
  ]
})
export class ProductComponent {
  @Input() product!:Product;

  @Output() addEv = new EventEmitter<number>();

  addProduct(id:number){
    this.addEv.emit(id);
  }

}





















