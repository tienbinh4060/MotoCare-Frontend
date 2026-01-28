import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyMaintenance } from './agency-maintenance';

describe('AgencyMaintenance', () => {
  let component: AgencyMaintenance;
  let fixture: ComponentFixture<AgencyMaintenance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgencyMaintenance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencyMaintenance);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
