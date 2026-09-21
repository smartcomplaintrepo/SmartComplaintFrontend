import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complaint-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './complaint-list.component.html',
  styleUrl: './complaint-list.component.css'
})
export class ComplaintListComponent {
//testing by oshin
  searchText = '';
  selectedStatus = 'All Status';
  selectedPriority = 'All Priority';

  constructor(private router: Router) {}

  complaints = [
    {
      number: 'CMP-20260820-0001',
      title: 'Wi-Fi not working',
      category: 'IT',
      priority: 'High',
      status: 'In Progress',
      date: '20 Aug 2026'
    },
    {
      number: 'CMP-20260819-0002',
      title: 'Projector issue',
      category: 'Infrastructure',
      priority: 'Medium',
      status: 'Resolved',
      date: '19 Aug 2026'
    },
    {
      number: 'CMP-20260818-0003',
      title: 'Classroom fan not working',
      category: 'Infrastructure',
      priority: 'High',
      status: 'Open',
      date: '18 Aug 2026'
    },
    {
      number: 'CMP-20260817-0004',
      title: 'Computer not working',
      category: 'IT',
      priority: 'Medium',
      status: 'In Progress',
      date: '17 Aug 2026'
    },
    {
      number: 'CMP-20260816-0005',
      title: 'Water cooler issue',
      category: 'Maintenance',
      priority: 'Low',
      status: 'Resolved',
      date: '16 Aug 2026'
    },
    {
      number: 'CMP-20260815-0006',
      title: 'Washroom cleaning issue',
      category: 'Cleanliness',
      priority: 'Medium',
      status: 'Resolved',
      date: '15 Aug 2026'
    }
  ];

  get filteredComplaints() {
    return this.complaints.filter(complaint => {

      const search = this.searchText.toLowerCase();

      const matchesSearch =
        complaint.number.toLowerCase().includes(search) ||
        complaint.title.toLowerCase().includes(search);

      const matchesStatus =
        this.selectedStatus === 'All Status' ||
        complaint.status === this.selectedStatus;

      const matchesPriority =
        this.selectedPriority === 'All Priority' ||
        complaint.priority === this.selectedPriority;

      return matchesSearch && matchesStatus && matchesPriority;
    });
  }

  createComplaint() {
    this.router.navigate(['/complaints/create']);
  }

  viewComplaint(complaint: any) {
    this.router.navigate(['/complaints', complaint.number]);
  }
}