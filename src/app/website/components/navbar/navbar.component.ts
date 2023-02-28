import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { CartService } from './../../../services/cart.service';
import { listCategory, CategoryList } from './../../../util/category';
import { AuthService } from './../../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: []
})
export class NavbarComponent implements OnInit {

  listCategory: CategoryList[] = listCategory;

  sessionActive:boolean = false;

  open:boolean = false;

  category:boolean = false;

  amount!:number;

  constructor(
    private cartService: CartService,
    private authService: AuthService
  ){ }

  ngOnInit() {
    this.cartService.cart.pipe(
      map(data => data.reduce((acc,act) => acc + act.amount,0))
    )
    .subscribe(value => {
      this.amount = value;
    })

    //verificación de existencia de sesión
    this.authService.stateSession.subscribe( state => {
      this.sessionActive = state;
    });

  }

  toggleMenu(){
    this.open = !this.open;
  }

  openCategory(){
    this.category = !this.category;
  }

  logout(){
    this.authService.logout();
  }
}











