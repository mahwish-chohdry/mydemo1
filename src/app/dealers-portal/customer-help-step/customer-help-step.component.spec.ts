import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerHelpStepComponent } from './customer-help-step.component';

describe('CustomerHelpStepComponent', () => {
  let component: CustomerHelpStepComponent;
  let fixture: ComponentFixture<CustomerHelpStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerHelpStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerHelpStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
