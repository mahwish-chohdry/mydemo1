import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeSubscriptionPlanComponent } from './change-subscription-plan.component';

describe('ManageSubscriptionPlanComponent', () => {
  let component: ChangeSubscriptionPlanComponent;
  let fixture: ComponentFixture<ChangeSubscriptionPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeSubscriptionPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeSubscriptionPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
