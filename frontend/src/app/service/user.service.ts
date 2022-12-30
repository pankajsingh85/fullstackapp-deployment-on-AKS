import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { UserModel } from '../models/user-model.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user: Observable<UserModel>;

  constructor(
    private router:Router,
    private http:HttpClient
  ) { 

  }
 
  login(user:UserModel){
    return this.http.post<UserModel[]>(`${environment.apiUrl}/getUser`,user);
  }
  register(user:UserModel){
    return this.http.post<UserModel[]>(`${environment.apiUrl}/addUser`,user);
  }
  checkUser(user:UserModel){
    return this.http.post<UserModel[]>(`${environment.apiUrl}/checkUser`,user);
  }
}

