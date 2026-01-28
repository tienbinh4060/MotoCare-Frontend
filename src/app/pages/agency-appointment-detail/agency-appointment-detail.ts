import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Appointment {
  id: string;
  customerName: string;
  phone: string;
  email: string;
  brand: string;
  model: string;
  plate: string;
  date: string;
  time: string;
  status: 'confirmed' | 'pending' | 'done' | 'cancel';
}

const APPOINTMENTS: Appointment[] = [
  {
    id: 'A12345',
    customerName: 'Ngọc Trọng',
    phone: '123-456-7890',
    email: 'example@gmail.com',
    brand: 'Yamaha',
    model: 'Yamaha Sirius',
    plate: 'XYZ - 1234',
    date: '01/12/2023',
    time: '10:00 PM',
    status: 'confirmed',
  },
  {
    id: 'A12346',
    customerName: 'Tiến Bình',
    phone: '098-765-4321',
    email: 'tienbinh@gmail.com',
    brand: 'Honda',
    model: 'Wave Alpha',
    plate: 'ABC - 9876',
    date: '02/12/2023',
    time: '11:00 AM',
    status: 'pending',
  },
  {
    id: 'A12347',
    customerName: 'Dư Bình',
    phone: '321-654-0987',
    email: 'dubinh@gmail.com',
    brand: 'Yamaha',
    model: 'Exciter',
    plate: 'LMN - 4567',
    date: '03/12/2023',
    time: '02:00 PM',
    status: 'done',
  },
  {
    id: 'A12349',
    customerName: 'Đức Tú',
    phone: '321-654-4444',
    email: 'ductu@gmail.com',
    brand: 'Suzuki',
    model: 'Raider',
    plate: 'OMN - 4953',
    date: '03/12/2023',
    time: '04:00 PM',
    status: 'cancel',
  },
];

@Component({
  selector: 'app-agency-appointment-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './agency-appointment-detail.html',
  styleUrls: ['./agency-appointment-detail.css'],
})
export class AgencyAppointmentDetailComponent {
  appointment!: Appointment;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    const found = APPOINTMENTS.find(a => a.id === id);
    if (found) this.appointment = found;
  }

  goBack() {
    this.router.navigate(['/appointments']);
  }

  markDone() {
    const ok = confirm('Bạn có chắc muốn đánh dấu cuộc hẹn này là hoàn thành không?');
    if (ok) {
      this.router.navigate(['/appointments']);
    }
  }

  cancelAppointment() {
    const ok = confirm('Bạn có chắc muốn huỷ cuộc hẹn này không?');
    if (ok) {
      this.router.navigate(['/appointments']);
    }
  }
}
  