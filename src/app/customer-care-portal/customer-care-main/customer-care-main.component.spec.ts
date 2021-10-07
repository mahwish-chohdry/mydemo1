import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCareMainComponent } from './customer-care-main.component';

describe('CustomerCareMainComponent', () => {
  let component: CustomerCareMainComponent;
  let fixture: ComponentFixture<CustomerCareMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerCareMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCareMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
