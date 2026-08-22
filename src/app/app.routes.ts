import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';


export const routes: Routes = [

  // ============================
  // LOGIN
  // ============================

  {
    path: 'login',
    loadComponent: () =>
      import('./auth/login/login.component')
        .then(m => m.LoginComponent)
  },


  // ============================
  // APPLICATION LAYOUT
  // ============================

  {
    path: '',
    loadComponent: () =>
      import('./shared/layout/layout.component')
        .then(m => m.LayoutComponent),

    children: [

      // Dashboard
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./dashboard/dashboard/dashboard.component')
            .then(m => m.DashboardComponent)
      },


      // Create Complaint
      {
        path: 'complaints/create',
        loadComponent: () =>
          import('./complaints/complaint-create/create-complaint/create-complaint.component')
            .then(m => m.CreateComplaintComponent)
      },


      // My Complaints
      {
        path: 'complaints/list',
        loadComponent: () =>
          import('./complaints/complaint-list/complaint-list/complaint-list.component')
            .then(m => m.ComplaintListComponent)
      },


      // Complaint Details
      {
        path: 'complaints/details/:id',
        loadComponent: () =>
          import('./complaints/complaint-details/complaint-details/complaint-details.component')
            .then(m => m.ComplaintDetailsComponent)
      }

    ]
  },


  // ============================
  // DEFAULT
  // ============================

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },


  // ============================
  // INVALID URL
  // ============================

  {
    path: '**',
    redirectTo: 'login'
  }

];