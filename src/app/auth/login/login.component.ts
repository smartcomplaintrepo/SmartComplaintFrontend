import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  //suraj comment
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {

    this.loginForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],

      password: ['', [
        Validators.required,
        Validators.minLength(6)
      ]]
    });

  }

  // onSubmit(): void {
  //   this.router.navigate(['dashboard']);

  //   if (this.loginForm.invalid) {
  //     this.loginForm.markAllAsTouched();
  //     return;
  //   }

  //   console.log('Login Data:', this.loginForm.value);   
    
  // }

  onSubmit(): void {
    // 1. Stop if the form is invalid
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    console.log('Sending Login Data:', this.loginForm.value);

    // 2. Make the API Call
    this.authService.login(this.loginForm.value).subscribe({
      next: (response) => {
        console.log('Login Successful', response);
        // Save token here if needed (e.g., localStorage.setItem('token', response.token))
        // 🟢 Ensure you are extracting the string property, not the whole object
        localStorage.setItem('token', response.token); 

        // 3. Navigate only after successful login
        this.router.navigate(['dashboard']);
      },
      error: (error) => {
        console.error('Login Failed', error);
        // Handle error displays here (e.g., "Invalid credentials")
      }
    });
  }


}