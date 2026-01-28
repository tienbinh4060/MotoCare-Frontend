import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agency-record-maintenance',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './agency-record-maintenance.html',
  styleUrls: ['./agency-record-maintenance.css'],
})
export class AgencyRecordMaintenanceComponent {
  showToast = false;

  constructor(private router: Router) {}

  submit() {
    this.showToast = true;

    setTimeout(() => {
      this.router.navigate(['/maintenance']);
    }, 1200);
  }

  cancel() {
    const ok = confirm('Bạn có chắc muốn huỷ thao tác này không?');
    if (ok) {
      this.router.navigate(['/maintenance']);
    }
  }
}
