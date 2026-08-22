import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private router: Router) {}

  goToDashboard(): void {
    this.router.navigate(['/dashboard']);
  }

  createComplaint(): void {
    this.router.navigate(['/complaints/create']);
  }

  viewComplaints(): void {
    this.router.navigate(['/complaints/list']);
  }

  logout(): void {
    this.router.navigate(['/login']);
  }

  goToProfile(): void {
    //this.router.navigate(['/login']);
  }

}