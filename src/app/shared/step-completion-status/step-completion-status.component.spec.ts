import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepCompletionStatusComponent } from './step-completion-status.component';

describe('StepCompletionStatusComponent', () => {
  let component: StepCompletionStatusComponent;
  let fixture: ComponentFixture<StepCompletionStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepCompletionStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepCompletionStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
