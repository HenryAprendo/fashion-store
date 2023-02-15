import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { Shopping } from './../../../models/shopping/shopping.model';

interface Option {
  name: string;
  value: number;
}

@Component({
  selector: 'app-product-cart',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {

  options:Option[] = [{name:'1', value: 1}, {name:'2', value: 2}, {name:'3', value: 3}, {name:'4', value: 4}, {name:'5', value: 5}, {name:'6', value: 6}, {name:'7', value: 7}, {name:'8', value: 8}, {name:'9', value: 9}, {name:'10', value: 10} ];

  quantity = new FormControl(1);

  productCart!:Shopping;

  @Input('productCart')
  set update(data:Shopping){
    this.productCart = data;
    this.quantity.setValue(this.productCart.amount);
    console.log(this.productCart.amount);
    console.log('no volvio a entrar')
  }

  @Output() removeEvt = new EventEmitter<number>();

  @Output() addEvt = new EventEmitter<Shopping>();

  constructor(){ }

  ngOnInit() {
    // this.quantity.setValue(this.productCart.amount);

    this.quantity.valueChanges
      .subscribe(value => {
        if(value !== null){
          this.productCart.amount = Number(value);
          this.add(this.productCart);
        }
      });

  }

  remove(id: number) {
    this.removeEvt.emit(id);
  }

  add(shopping:Shopping) {
    this.addEvt.emit(shopping);
  }

}





