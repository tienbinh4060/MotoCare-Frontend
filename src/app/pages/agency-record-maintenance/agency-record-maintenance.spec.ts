import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgencyRecordMaintenance } from './agency-record-maintenance';

describe('AgencyRecordMaintenance', () => {
  let component: AgencyRecordMaintenance;
  let fixture: ComponentFixture<AgencyRecordMaintenance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgencyRecordMaintenance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencyRecordMaintenance);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
