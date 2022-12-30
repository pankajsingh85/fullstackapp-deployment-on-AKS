import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Service } from '../models/service.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceabilityService {
  public product: Observable<Service>;

  constructor(private router: Router,
    private http: HttpClient) {
  
  }


  private data: any; 

  setData(data:any){
    this.data = data;
  }

  getData(){
    let temp = this.data;
    return temp;
  }
  

  getAll() {
    return this.http.get<Service[]>(`${environment.apiUrl}/getData`);
  }
  create(service:Service) {
    return this.http.post<Service[]>(`${environment.apiUrl}/addData`, service);
  }

  delete(id: number) {
    return this.http.get<Service[]>(`${environment.apiUrl}/deleteData/${id}`);
  }

  edit(id:number){
    return this.http.get<Service[]>(`${environment.apiUrl}/editData/${id}`);
   }
   update(service:Service){
    return this.http.post<Service[]>(`${environment.apiUrl}/updateData`,service);
   }

}
