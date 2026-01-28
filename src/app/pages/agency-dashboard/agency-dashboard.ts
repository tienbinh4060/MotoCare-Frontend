import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Appointment {
  id: string;
  customerName: string;
  plate: string;
  time: string;
  status: 'pending' | 'confirmed' | 'done';
}

@Component({
  selector: 'app-agency-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './agency-dashboard.html',
  styleUrls: ['./agency-dashboard.css'],
})
export class AgencyDashboardComponent {
  appointments: Appointment[] = [
    {
      id: 'A12345',
      customerName: 'Ngọc Trọng',
      plate: 'XYZ - 1234',
      time: '10:00 AM',
      status: 'pending',
    },
    {
      id: 'A12346',
      customerName: 'Hữu Mạnh',
      plate: 'ABC - 5678',
      time: '11:30 AM',
      status: 'confirmed',
    },
    {
      id: 'A12347',
      customerName: 'Tiến Bình',
      plate: 'NTB - 0406',
      time: '1:00 PM',
      status: 'done',
    },
    {
      id: 'A12348',
      customerName: 'Đức Tú',
      plate: 'LMM - 0398',
      time: '5:25 PM',
      status: 'done',
    },
  ];

  /** ✔ Xác nhận lịch hẹn (mock) */
  confirmAppointment(a: Appointment) {
    const ok = confirm('Bạn có chắc muốn xác nhận cuộc hẹn này không?');
    if (ok) {
      alert('Xác nhận cuộc hẹn thành công');
    }
  }

  /** ✖ Huỷ lịch hẹn (mock) */
  cancelAppointment(a: Appointment) {
    const ok = confirm('Bạn có chắc muốn huỷ cuộc hẹn này không?');
    if (ok) {
      alert('Huỷ cuộc hẹn thành công');
    }
  }
}
