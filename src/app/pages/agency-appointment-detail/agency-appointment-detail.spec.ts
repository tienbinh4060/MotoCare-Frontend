import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgencyAppointmentDetailComponent } from './agency-appointment-detail';

describe('AgencyAppointmentDetailComponent', () => {
  let component: AgencyAppointmentDetailComponent;
  let fixture: ComponentFixture<AgencyAppointmentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgencyAppointmentDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AgencyAppointmentDetailComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
