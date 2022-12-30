import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from 'src/app/service/product.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.less']
})
export class ProductDetailsComponent implements OnInit {

  submitted = false;
  isSubmit=false;
  products: any = null;
  service:any=null;
  isLogin: Boolean = true;
  isServiceAble: Boolean;
  serviceAbilityForm: FormGroup;
  date:any;
  pinCodePattern = "^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$";


  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private viewService: ProductService) { }

  ngOnInit(): void {

     this.viewService.getDetails(this.route.snapshot.params?.['productCode']).subscribe(products=>{
     this.products=products
     console.log(this.products)
   })

    this.serviceAbilityForm = this.formBuilder.group({
      pinCode: ['', [Validators.required, Validators.pattern(this.pinCodePattern)]],
      productCode:['']

    })
  }
  get f() { return this.serviceAbilityForm.controls; }

  onlogout() {
    localStorage.setItem('username', 'null')
    this.router.navigate(['/'])
  }

  onSubmit() {
    this.submitted = true;
    if (this.serviceAbilityForm.invalid) {
       return;
    }
    else {
      this.serviceAbilityForm.setValue({
        pinCode:this.serviceAbilityForm.controls['pinCode'].value,
        productCode:this.route.snapshot.params?.['productCode']
      })
  
      this.viewService.checkPinCode(this.serviceAbilityForm.value).subscribe(service => {
        this.isSubmit=true;
        this.service=service
        console.log(this.service)
        if ( this.service.length==0 || this.service[0].quantity==0)  {
          this.isServiceAble = false;
          this.submitted=false;
        }
        else {
          this.service=service
          this.isServiceAble = true;
          this.submitted=false;
          let today = new Date();
          var dd = String(today.getDate()).padStart(2, '0');
          var mm = String(today.getMonth() + 1).padStart(2, '0');
          var yyyy = today.getFullYear();
          let d:number=+dd+2
          this.date = ""+d + '/' +""+ mm+'/' + yyyy;
        }
      });
    }
  
  }

}
