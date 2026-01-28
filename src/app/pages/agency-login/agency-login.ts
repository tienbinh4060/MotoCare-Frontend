import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agency-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './agency-login.html',
  styleUrls: ['./agency-login.css'],
})
export class AgencyLoginComponent {
  email = '';
  password = '';
  remember = false;

  constructor(private router: Router) {}

  login() {
    if (this.email && this.password) {
      this.router.navigate(['/dashboard']);
    }
  }
}
