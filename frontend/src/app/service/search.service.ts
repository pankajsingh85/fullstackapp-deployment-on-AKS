import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ProductModel } from '../models/product-model.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public product: Observable<ProductModel>;


  constructor(private router: Router,
    private http: HttpClient) {
    
  }

  search(product:ProductModel){
    return this.http.post<ProductModel[]>(`${environment.apiUrl}/search`,product);
  }
}
