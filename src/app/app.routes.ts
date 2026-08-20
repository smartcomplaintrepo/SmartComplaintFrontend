
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'complaints/create',
    loadComponent: () =>
      import('./complaints/complaint-create/create-complaint/create-complaint.component').then(
        m => m.CreateComplaintComponent)
  },
  {
    path: 'complaints',
    loadComponent: () =>
      import('./complaints/complaint-list/complaint-list/complaint-list.component').then(
        m => m.ComplaintListComponent)
  },
  {
    path: 'complaints/:id',
    loadComponent: () =>
      import('./complaints/complaint-details/complaint-details/complaint-details.component').then(
        m => m.ComplaintDetailsComponent
      )
  },
  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: '**',
    redirectTo: 'login'
  }
];