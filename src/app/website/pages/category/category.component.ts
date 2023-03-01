import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CategoryService, CATEGORIES } from './../../../services/category.service';
import { switchMap } from 'rxjs';
import { Product } from './../../../models/product/product.model';
import { ProductListComponent } from './../../components/product-list/product-list.component';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, ProductListComponent, RouterModule],
  template: `
    <section class="mb-8">
      <div class="w-full pl-10 my-7 box-border">
        <h1 class="text-3xl font-semibold ">{{title}}</h1>
      </div>
      <app-product-list [products]="products" [show]="show" ></app-product-list>
    </section>
  `,
  styles: [
  ]
})
export class CategoryComponent implements OnInit {

  title = '';

  category!:number;

  products!: Product[];

  show:boolean = false;

  constructor(
    private categoryService:CategoryService,
    private route: ActivatedRoute
  ){ }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        this.category = Number(params.get('category'));
        return this.categoryService.getProductCategory(this.category);
      })
    ).subscribe({
      next: (data) => {
        this.products = data;
        this.title = CATEGORIES[this.category];
        this.show = !this.show;
      },

      error: (err) => {
        console.log(err);
      }

    });
  }

}

// forma comun de obtener parametros
    // this.route.paramMap.subscribe(params => {
    //   const category = Number(params.get('category'));
    //   if(category !== null){
    //     this.getProducts(category);
    //   }
    // });








