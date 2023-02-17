import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCartSummaryComponent } from './product-cart-summary.component';

describe('ProductCartSummaryComponent', () => {
  let component: ProductCartSummaryComponent;
  let fixture: ComponentFixture<ProductCartSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ProductCartSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCartSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
