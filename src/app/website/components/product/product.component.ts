import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from 'src/app/models/product/product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  template: `
      <div class="w-64">
      <a>
        <div class="w-64">
          <div class="h-72 mb-2 border p-2 rounded-md">
            <img class="w-full h-full" [src]="product.image" alt="{{product.title}}">
          </div>
          <div class="p-1">
            <h3 class="text-gray-700 text-sm">{{product.title}}</h3>
            <p class="text-gray-900 font-semibold">$ {{product.price}}</p>
          </div>
        </div>
      </a>
      <button class="p-2 bg-gray-400 text-lg text-white font-medium w-full rounded-md hover:bg-gray-500 active:bg-gray-700">Add to bag</button>
    </div>
  `,
  styles: [
  ]
})
export class ProductComponent {
  @Input() product!:Product;
}







