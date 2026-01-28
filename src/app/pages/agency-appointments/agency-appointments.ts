import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { APPOINTMENTS } from '../../data/appointments.mock';

@Component({
  selector: 'app-agency-appointments',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './agency-appointments.html',
  styleUrl: './agency-appointments.css',
})
export class AgencyAppointmentsComponent {
  appointments = APPOINTMENTS;

  /** ✔ Xác nhận cuộc hẹn (mock) */
  confirmAppointment(a: any) {
    const ok = confirm('Bạn có chắc muốn xác nhận cuộc hẹn này không?');

    if (ok) {
      alert('Xác nhận cuộc hẹn thành công');
    }
  }

  /** ✖ Huỷ cuộc hẹn (mock) */
  cancelAppointment(a: any) {
    const ok = confirm('Bạn có chắc muốn huỷ cuộc hẹn này không?');

    if (ok) {
      alert('Huỷ cuộc hẹn thành công');
    }
  }
}
