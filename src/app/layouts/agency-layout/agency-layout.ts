import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-agency-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive, // ✅ BẮT BUỘC
  ],
  templateUrl: './agency-layout.html',
  styleUrls: ['./agency-layout.css'],
})
export class AgencyLayoutComponent {}
