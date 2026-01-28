import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface MaintenanceHistory {
  date: string;
  customerName: string;
  vehiclePlate: string;
  serviceType: string;
  mileage: string;
  nextDue?: string;
}

@Component({
  selector: 'app-agency-maintenance',
  standalone: true,
  imports: [CommonModule, RouterLink], // ✅ BẮT BUỘC
  templateUrl: './agency-maintenance.html',
  styleUrls: ['./agency-maintenance.css'],
})
export class AgencyMaintenanceComponent {
  histories: MaintenanceHistory[] = [
    {
      date: '14/01/2024',
      customerName: 'Ngọc Trọng',
      vehiclePlate: 'XYZ - 1234',
      serviceType: 'Thay dầu',
      mileage: '5.000 km',
      nextDue: '14/07/2024',
    },
    {
      date: '13/01/2024',
      customerName: 'Tiến Bình',
      vehiclePlate: 'ABC - 9876',
      serviceType: 'Thay pin',
      mileage: '12.000 km',
      nextDue: '13/01/2025',
    },
    {
      date: '12/01/2024',
      customerName: 'Dư Bình',
      vehiclePlate: 'LMN - 4567',
      serviceType: 'Kiểm tra',
      mileage: '8.000 km',
    },
    {
      date: '11/01/2024',
      customerName: 'Đức Tú',
      vehiclePlate: 'OMN - 4953',
      serviceType: 'Thay dầu',
      mileage: '15.000 km',
    },
  ];
}
