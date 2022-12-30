import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ServiceabilityService } from 'src/app/service/serviceability.service';


@Component({
  selector: 'app-admin-service-view',
  templateUrl: './admin-service-view.component.html',
  styleUrls: ['./admin-service-view.component.css']
})
export class AdminServiceViewComponent implements OnInit {

  results:any=null;
  constructor(private route:ActivatedRoute,
    private router:Router,
    private serviceabilityService:ServiceabilityService) { }

  ngOnInit(): void {
    this.serviceabilityService.getAll()
    .subscribe(results => this.results = results);
  }

  edit(productCode:number){
    this.serviceabilityService.edit(productCode)
    .subscribe(products =>{ 
      this.results = products
      this.serviceabilityService.setData(this.results)
      this.router.navigate(['adminHome/edit2/'+productCode]);
    });
   
  }
  delete(id:number){
    console.log(id);
    this.serviceabilityService.delete(id)
    .subscribe(results=> {
      this.results = results
      this.router.navigate(['/adminHome/view2']);
    });
    
  }
}

  





