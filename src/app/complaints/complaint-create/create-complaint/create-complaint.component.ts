import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ComplaintServiceService } from '../../../services/complaint-service.service';

@Component({
  selector: 'app-create-complaint',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './create-complaint.component.html',
  styleUrl: './create-complaint.component.css'
})
export class CreateComplaintComponent {

  showSuccessPopup = false;
  complaintNumber = '';
  category = '';
  title = '';
  priority = '';
  description = '';


  constructor(private router: Router,private complaintService: ComplaintServiceService) {}


  // submitComplaint(): void {

  //   // Temporary validation
  //   if (
  //     !this.category ||
  //     !this.title ||
  //     !this.priority ||
  //     !this.description
  //   ) {
  //     alert('Please fill all required fields.');
  //     return;
  //   }


  //   // Temporary complaint number
  //   // Later this will come from .NET Core API

  //   this.complaintNumber = 'CMP-20260820-0001';

  //   this.showSuccessPopup = true;
  // }

submitComplaint(): void {
  debugger
    // 1. Structural validation
    if (!this.category || !this.title || !this.priority || !this.description) {
      alert('Please fill all required fields.');
      return;
    }

    //this.errorMessage = null;

    // 2. Build payload structure matching the API request contract
    const payload = {
      category: this.category,
      title: this.title,
      priority: this.priority,
      description: this.description
    };

    // 3. Make the API request
    this.complaintService.submitComplaint(payload).subscribe({
      next: (response:any) => {
        console.log('Complaint Submitted Successfully:', response);
        
        // 4. Capture the actual tracking ID returned from your .NET API
        // Adjust property name (e.g., response.complaintNumber or response.id) based on backend contract
        this.complaintNumber = response.complaintNumber || response.id; 
        
        this.showSuccessPopup = true;
        this.resetForm();
      },
      error: (err:any) => {
        console.error('Submission Failed:', err);
        //this.errorMessage = err.error?.message || 'Failed to submit the complaint. Please try again.';
      }
    });
  }

  resetForm(): void {
    this.category = '';
    this.title = '';
    this.priority = '';
    this.description = '';
  }


  closeSuccessPopup(): void {

    this.showSuccessPopup = false;

    // Go to My Complaints
    this.router.navigate(['/complaints/list']);
  }


  cancel(): void {

    this.router.navigate(['/dashboard']);

  }

}