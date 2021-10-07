import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerPortalComponent } from './dealer-portal.component';

describe('DealerPortalComponent', () => {
  let component: DealerPortalComponent;
  let fixture: ComponentFixture<DealerPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealerPortalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealerPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
