import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerPopupFooterComponent } from './dealer-popup-footer.component';

describe('DealerPopupFooterComponent', () => {
  let component: DealerPopupFooterComponent;
  let fixture: ComponentFixture<DealerPopupFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealerPopupFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealerPopupFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
