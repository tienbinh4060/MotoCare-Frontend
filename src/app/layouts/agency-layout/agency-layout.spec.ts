import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyLayout } from './agency-layout';

describe('AgencyLayout', () => {
  let component: AgencyLayout;
  let fixture: ComponentFixture<AgencyLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgencyLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencyLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
