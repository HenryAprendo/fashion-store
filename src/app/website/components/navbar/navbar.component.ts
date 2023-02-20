import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { CartService } from './../../../services/cart.service';
import { listCategory, CategoryList } from './../../../util/category';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: []
})
export class NavbarComponent implements OnInit {

  listCategory: CategoryList[] = listCategory;

  open:boolean = false;

  category:boolean = false;

  amount!:number;

  constructor(private cartService: CartService){ }

  ngOnInit() {
    this.cartService.cart.pipe(
      map(data => data.reduce((acc,act) => acc + act.amount,0))
    )
    .subscribe(value => {
      this.amount = value;
    })
  }

  toggleMenu(){
    this.open = !this.open;
  }

  openCategory(){
    this.category = !this.category;
  }

}











