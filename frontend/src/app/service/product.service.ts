import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ProductModel } from '../models/product-model.model';
import { Service } from '../models/service.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public product: Observable<ProductModel>;
  public service:Observable<Service>;
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
    return this.http.get<ProductModel[]>(`${environment.apiUrl}/view`);
  }

  getPrice(productCode:Number){
    return this.http.get<ProductModel[]>(`${environment.apiUrl}/view/${productCode}`);
  }

  getDetails(productCode:Number){
    return this.http.get<ProductModel[]>(`${environment.apiUrl}/details/${productCode}`);
  }


  filterPrice(product:ProductModel){
    return this.http.post<ProductModel[]>(`${environment.apiUrl}/filter`,product);
  }

 

  create(formData:any) {
    return this.http.post<ProductModel[]>(`${environment.apiUrl}/create`, formData);
  }
  delete(productCode: number) {
    return this.http.get<ProductModel[]>(`${environment.apiUrl}/delete/${productCode}`);
  }

  edit(productCode:number){
    return this.http.get<ProductModel[]>(`${environment.apiUrl}/edit/${productCode}`);
   }
   update(formData:any){
    return this.http.post<ProductModel[]>(`${environment.apiUrl}/update`,formData);
   }

   checkProductCode(product:ProductModel){
    return this.http.post<ProductModel[]>(`${environment.apiUrl}/checkProduct`,product);
  }

   
  checkPinCode(service:Service){
    return this.http.post<Service[]>(`${environment.apiUrl}/checkData`,service);
  }
}
