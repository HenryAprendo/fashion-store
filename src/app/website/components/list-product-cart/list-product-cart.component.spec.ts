import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductCartComponent } from './list-product-cart.component';

describe('ListProductCartComponent', () => {
  let component: ListProductCartComponent;
  let fixture: ComponentFixture<ListProductCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ListProductCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListProductCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
