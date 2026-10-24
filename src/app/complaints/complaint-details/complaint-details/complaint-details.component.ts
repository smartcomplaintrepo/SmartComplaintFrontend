import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComplaintServiceService } from '../../../services/complaint-service.service';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-complaint-details',
  imports: [CommonModule, DatePipe],
  templateUrl: './complaint-details.component.html',
  styleUrl: './complaint-details.component.css'
})
export class ComplaintDetailsComponent {

  complaintId!: string;
  complaintData: any;

  // 1. Inject ActivatedRoute and your API service
  constructor(
    private route: ActivatedRoute,
    private complaintService: ComplaintServiceService, 
    private router: Router
  ) {}

  ngOnInit(): void {
    // 2. Fetch the ID from the route parameter
    // Note: Make sure 'id' matches the variable name in your routing module (e.g., path: 'details/:id')
    this.complaintId = this.route.snapshot.paramMap.get('id')!;

    // 3. Call your API using the extracted ID
    if (this.complaintId) {
      this.fetchComplaintDetails(this.complaintId);
    }
  }

  fetchComplaintDetails(id: string): void {
    this.complaintService.getComplaintById(id).subscribe({
      next: (data) => {
        this.complaintData = data;
        console.log('API Data Loaded Successfully:', data);
      },
      error: (err) => {
        console.error('Error fetching complaint details:', err);
      }
    });
  }

  
  backComplaint(): void {
    this.router.navigate(['/complaints/list']);
  }

}
