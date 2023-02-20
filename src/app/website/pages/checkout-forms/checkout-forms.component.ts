import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../../shared/shared.module';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ProductCartSummaryComponent } from './../../components/product-cart-summary/product-cart-summary.component';
import { CartService } from './../../../services/cart.service';
import { OrderSummaryService } from './../../../services/order-summary.service';
import { Shopping } from './../../../models/shopping/shopping.model';
import { Summary } from './../../../models/summary/summary.model';

@Component({
  selector: 'app-checkout-forms',
  standalone: true,
  imports: [CommonModule, SharedModule, ReactiveFormsModule, ProductCartSummaryComponent],
  templateUrl: './checkout-forms.component.html',
  styleUrls: ['./checkout-forms.component.css']
})
export class CheckoutFormsComponent {

  shoppingCart!: Shopping[];

  summary:Summary|null = null;

  form!: FormGroup;

  constructor(
    private cartService:CartService,
    private orderService: OrderSummaryService,
    private fb: FormBuilder
  ){
    this.buildForm();
  }

  ngOnInit() {
    this.cartService.cart
      .subscribe(data => {
        this.shoppingCart = data;
        this.orderSummary();
      });

  }

  private buildForm(){
    this.form = this.fb.group({
      email: ['',[Validators.required, Validators.email]],
      firstName: ['', [Validators.required, Validators.maxLength(15)]],
      lastName: ['', [Validators.required, Validators.maxLength(15)]],
      company: ['', [Validators.required, Validators.maxLength(15)]],
      address: ['', [Validators.required]],
      apartment: ['',[Validators.required]],
      city: ['',[Validators.required, Validators.maxLength(15)]],
      country: ['united state',[Validators.required]],
      province: ['',[Validators.required, Validators.maxLength(15)]],
      code: [null,[Validators.required, Validators.maxLength(25)]],
      phone: [null,[Validators.required]],
      standar: [true],
      express: [false],
      payment: ['credit'],
      cardNumber: [null,[Validators.required]],
      nameCard: ['',[Validators.required]],
      date: [null],
      cvc: [null,[Validators.required]]
    })
  }

  get cvcField(){
    return this.form.get('cvc');
  }

  get cardNameField() {
    return this.form.get('nameCard');
  }

  get cardNumberField(){
    return this.form.get('cardNumber');
  }

  get phoneField(){
    return this.form.get('phone');
  }

  get codeField(){
    return this.form.get('code');
  }

  get provinceField(){
    return this.form.get('province');
  }

  get cityField(){
    return this.form.get('city');
  }

  get apartmentField(){
    return this.form.get('apartment');
  }

  get addressField(){
    return this.form.get('address');
  }

  get companyField(){
    return this.form.get('company');
  }

  get lastField(){
    return this.form.get('lastName');
  }
  get nameField(){
    return this.form.get('firstName');
  }

  get emailField(){
    return this.form.get('email');
  }

  confirmOrder(){
    if(this.form.valid){
      //enviar a la base de datos y redireccionar a la pagina de orden finalizada.
    }
    else {
      this.form.markAllAsTouched();
    }
  }

  orderSummary(){
    this.orderService.calculate(this.shoppingCart)
      .subscribe( data => {
        this.summary = data;
      });
  }

  removeProductCart(id:number){
    this.cartService.removeCart(id);
  }

  quantityProductCart(shopping:Shopping){
    this.cartService.changeQuantity(shopping);
  }

}

















