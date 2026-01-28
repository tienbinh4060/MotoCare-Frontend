import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyPromotions } from './agency-promotions';

describe('AgencyPromotions', () => {
  let component: AgencyPromotions;
  let fixture: ComponentFixture<AgencyPromotions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgencyPromotions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencyPromotions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
