import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgencyAppointmentsComponent } from './agency-appointments';

describe('AgencyAppointmentsComponent', () => {
  let component: AgencyAppointmentsComponent;
  let fixture: ComponentFixture<AgencyAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgencyAppointmentsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AgencyAppointmentsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
