import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Admin } from '../models/admin.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  public user: Observable<Admin>;
  constructor(
    private router:Router,
    private http:HttpClient
  ) { 
 
  }

  login(user:Admin){
    return this.http.post<Admin[]>(`${environment.apiUrl}/getAdmin`,user);
  }
  register(user:Admin){
    return this.http.post<Admin[]>(`${environment.apiUrl}/addAdmin`,user);
  }
}
