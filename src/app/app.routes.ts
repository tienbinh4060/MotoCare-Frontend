import { Routes } from '@angular/router';

import { AgencyLayoutComponent } from './layouts/agency-layout/agency-layout';
import { AgencyDashboardComponent } from './pages/agency-dashboard/agency-dashboard';
import { AgencyAppointmentsComponent } from './pages/agency-appointments/agency-appointments';
import { AgencyAppointmentDetailComponent } from './pages/agency-appointment-detail/agency-appointment-detail';
import { AgencyMaintenanceComponent } from './pages/agency-maintenance/agency-maintenance';
import { AgencyPromotionsComponent } from './pages/agency-promotions/agency-promotions';
import { AgencyLoginComponent } from './pages/agency-login/agency-login';
import { AgencyRecordMaintenanceComponent } from './pages/agency-record-maintenance/agency-record-maintenance';


export const routes: Routes = [
  { path: 'login', component: AgencyLoginComponent },

  { path: '', redirectTo: 'login', pathMatch: 'full' },

  {
    path: '',
    component: AgencyLayoutComponent,
    children: [
      { path: 'dashboard', component: AgencyDashboardComponent },
      { path: 'appointments', component: AgencyAppointmentsComponent },
      { path: 'appointments/:id', component: AgencyAppointmentDetailComponent },
      { path: 'maintenance', component: AgencyMaintenanceComponent },
      { path: 'promotions', component: AgencyPromotionsComponent },
      { path: 'maintenance/new', component: AgencyRecordMaintenanceComponent },

    ],
  },
];
