import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsRecievedComponent } from './sms-recieved.component';

describe('SmsRecievedComponent', () => {
  let component: SmsRecievedComponent;
  let fixture: ComponentFixture<SmsRecievedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmsRecievedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsRecievedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
