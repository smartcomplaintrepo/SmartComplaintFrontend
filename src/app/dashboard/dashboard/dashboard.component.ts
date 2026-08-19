import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  totalComplaints = 25;
  pendingComplaints = 8;
  inProgressComplaints = 6;
  resolvedComplaints = 9;
  closedComplaints = 2;

  recentComplaints = [
    {
      id: 1001,
      title: 'Internet connection not working',
      category: 'Technical',
      priority: 'High',
      status: 'Pending',
      date: '18 Aug 2026'
    },
    {
      id: 1002,
      title: 'Classroom fan not working',
      category: 'Infrastructure',
      priority: 'Medium',
      status: 'In Progress',
      date: '17 Aug 2026'
    },
    {
      id: 1003,
      title: 'Library book issue',
      category: 'Library',
      priority: 'Low',
      status: 'Resolved',
      date: '16 Aug 2026'
    },
    {
      id: 1004,
      title: 'Hostel water problem',
      category: 'Hostel',
      priority: 'High',
      status: 'Pending',
      date: '15 Aug 2026'
    }
  ];

}