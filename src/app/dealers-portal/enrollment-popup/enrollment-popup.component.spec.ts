import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentPopupComponent } from './enrollment-popup.component';

describe('EnrollmentPopupComponent', () => {
  let component: EnrollmentPopupComponent;
  let fixture: ComponentFixture<EnrollmentPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrollmentPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollmentPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
