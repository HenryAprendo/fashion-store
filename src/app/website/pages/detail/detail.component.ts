import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router  } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from './../../../models/product/product.model';
import { ProductService } from './../../../services/product.service';
import { CartService } from './../../../services/cart.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  product$!: Observable<Product>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private cartService: CartService
  ){ }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      if(id !== null){
        this.product$ = this.productService.getOne(id);
      }
    })
  }

  addProduct(product:Product){
    this.cartService.addCart(product);
  }

}











