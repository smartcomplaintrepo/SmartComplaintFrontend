import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
userName = 'User';

totalComplaints = 9;
pendingComplaints = 7;
inProgressComplaints = 10;
resolvedComplaints = 6;
}
