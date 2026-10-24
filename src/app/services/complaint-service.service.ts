import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComplaintServiceService {

  private apiUrl = '/api/Complaints/';

  constructor(private http: HttpClient) {} 

  submitComplaint(complaintData: any): Observable<any> {
    // 🟢 Fetch the token stored during login
    const token = localStorage.getItem('token');
    
    // Set headers matching your cURL command, including the Bearer Authorization token
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.post<any>(this.apiUrl+'CreateComplaint', complaintData, { headers });
  }

   getMyComplaints(): Observable<any[]> {
    const token = localStorage.getItem('token');
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<any[]>(this.apiUrl+'GetMyComplaints', { headers });
  }


  getComplaintById(id: string): Observable<any> {
  const token = localStorage.getItem('token');
  
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  });

  // Appends the ID to the endpoint path (e.g., GetComplaintById/YOUR_ID)
  return this.http.get<any>(`${this.apiUrl}GetComplaintById/${id}`, { headers });
}

}
