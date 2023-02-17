import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { Shopping } from './../../../models/shopping/shopping.model';
import { OPTIONS } from './../../../../app/util/option';

@Component({
  selector: 'app-product-cart-summary',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './product-cart-summary.component.html',
  styleUrls: ['./product-cart-summary.component.css']
})
export class ProductCartSummaryComponent {

  options = OPTIONS;

  quantity = new FormControl(1);

  @Input() productCart!:Shopping;

  @Output() removeEvt = new EventEmitter<number>();

  @Output() addEvt = new EventEmitter<Shopping>();

  constructor(){ }

  ngOnInit() {

    // establece el valor del input select, en el primer render del componente.
    this.quantity.setValue(this.productCart.amount);

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
