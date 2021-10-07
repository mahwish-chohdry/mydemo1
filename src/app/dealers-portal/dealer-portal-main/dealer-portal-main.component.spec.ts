import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerPortalMainComponent } from './dealer-portal-main.component';

describe('DealerPortalMainComponent', () => {
  let component: DealerPortalMainComponent;
  let fixture: ComponentFixture<DealerPortalMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealerPortalMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealerPortalMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
