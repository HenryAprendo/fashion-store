import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './../../../services/product.service';
import { Product } from './../../../models/product/product.model';
import { ProductListComponent } from './../../components/product-list/product-list.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  show:boolean = false;

  constructor(private productService: ProductService){ }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts(){

    this.productService.getAll()
      .subscribe({
        next: (data) => {
          this.products = data;
          this.show = !this.show;
          console.log(data);
        },

        error: (err) => {
          console.log(err);
        }

      })

  }

}












