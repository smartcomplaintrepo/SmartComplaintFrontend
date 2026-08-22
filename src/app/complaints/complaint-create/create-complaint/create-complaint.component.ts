import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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


  constructor(private router: Router) {}


  submitComplaint(): void {

    // Temporary validation
    if (
      !this.category ||
      !this.title ||
      !this.priority ||
      !this.description
    ) {
      alert('Please fill all required fields.');
      return;
    }


    // Temporary complaint number
    // Later this will come from .NET Core API

    this.complaintNumber = 'CMP-20260820-0001';

    this.showSuccessPopup = true;
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