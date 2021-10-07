import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendExpiryDateDetailsComponent } from './extend-expiry-date-details.component';

describe('ExtendExpiryDateDetailsComponent', () => {
  let component: ExtendExpiryDateDetailsComponent;
  let fixture: ComponentFixture<ExtendExpiryDateDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtendExpiryDateDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendExpiryDateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
