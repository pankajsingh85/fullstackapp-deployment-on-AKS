import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-admin-product-view',
  templateUrl: './admin-product-view.component.html',
  styleUrls: ['./admin-product-view.component.css']
})
export class AdminProductViewComponent implements OnInit {
  products:any=null;
  constructor(private route:ActivatedRoute,
    private router:Router,
    private viewService:ProductService) { }

  ngOnInit(): void {
    this.viewService.getAll()
    .subscribe(products => this.products = products);
  }
  edit(productCode:number){
    this.viewService.edit(productCode)
    .subscribe(products =>{ 
      this.products = products
      this.viewService.setData(this.products)
      this.router.navigate(['adminHome/edit/'+productCode]);
    });
   
  }
  delete(productCode:number){
    console.log(productCode);
    this.viewService.delete(productCode)
    .subscribe(products=> {
      this.products = products
    });
    this.router.navigate(['/adminHome/view']);
  }


}  




