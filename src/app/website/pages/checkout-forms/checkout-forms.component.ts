import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkout-forms',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './checkout-forms.component.html',
  styleUrls: ['./checkout-forms.component.css']
})
export class CheckoutFormsComponent {

}
