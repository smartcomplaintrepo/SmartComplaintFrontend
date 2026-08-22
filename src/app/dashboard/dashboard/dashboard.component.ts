import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private router: Router) {}


   createComplaint(): void {
    this.router.navigate(['/complaints/create']);
  }

  viewComplaints(): void {
    this.router.navigate(['/complaints/list']);
  }
 
}