import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: []
})
export class NavbarComponent  {

  open:boolean = false;

  category:boolean = false;

  constructor(){ }

  toggleMenu(){
    this.open = !this.open;
  }

  openCategory(){
    this.category = !this.category;
  }

}
