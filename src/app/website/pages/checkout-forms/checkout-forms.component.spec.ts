import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutFormsComponent } from './checkout-forms.component';

describe('CheckoutFormsComponent', () => {
  let component: CheckoutFormsComponent;
  let fixture: ComponentFixture<CheckoutFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CheckoutFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
