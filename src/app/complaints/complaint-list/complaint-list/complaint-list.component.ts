import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComplaintServiceService } from '../../../services/complaint-service.service';


// 1. Define the data blueprint
interface Complaint {
  complaintNumber: string;
  title: string;
  category: string;
  priority: 'High' | 'Medium' | 'Low';
  status: 'Pending' | 'In Progress' | 'Resolved';
  date: string;
}

@Component({
  selector: 'app-complaint-list',
   standalone: true,
  imports: [CommonModule],
  templateUrl: './complaint-list.component.html',
  styleUrl: './complaint-list.component.css'
})
export class ComplaintListComponent {


  // 2. This array will hold the complaints data
  complaintsList: Complaint[] = [];

  errorMessage: string | null = null;

  // 1. Inject the service here
  constructor(private complaintService: ComplaintServiceService) {}

  ngOnInit(): void {
    this.loadComplaints();
  }

  loadComplaints(): void {
    // 2. Call the service and subscribe to fetch data from database
    this.complaintService.getMyComplaints().subscribe({
      next: (data) => {
        console.log('Complaints fetched from API:', data);
        this.complaintsList = data; // Assign data array directly to view template
      },
      error: (err) => {
        console.error('Failed to load complaints from API', err);
        this.errorMessage = 'Could not fetch complaints. Please verify your connection.';
      }
    });
  }
  viewComplaint(id: string): void {
    console.log('Viewing details for:', id);
    // Add logic here to open a modal or navigate to a details route
  }

}
