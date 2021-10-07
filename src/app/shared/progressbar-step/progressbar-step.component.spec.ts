import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressbarStepComponent } from './progressbar-step.component';

describe('ProgressbarStepComponent', () => {
  let component: ProgressbarStepComponent;
  let fixture: ComponentFixture<ProgressbarStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressbarStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressbarStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
