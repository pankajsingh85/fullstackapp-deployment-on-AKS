import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  addForm: FormGroup;
  products: any = null;
  submitted = false
  selectedFile: File;
  username: any;
  isProductCodeExists: any;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private viewService: ProductService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      productCode: ['', [Validators.required, Validators.min(1)]],
      productName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      productBrand: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      productPrice: ['', [Validators.required, Validators.min(100)]],
      productImage: ['', [Validators.required]],
      productDescription: ['', [Validators.required, Validators.maxLength(300), Validators.minLength(10)]],
    });
  }
  get f() { return this.addForm.controls; }


  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0]
  }



  onSubmit() {
    this.submitted = true
    if (this.addForm.invalid) {
      return;
    } else {
    
          const fd = new FormData();
          fd.append('image', this.selectedFile)
          fd.append('productCode', this.addForm.controls['productCode'].value)
          fd.append('productName', this.addForm.controls['productName'].value)
          fd.append('productBrand', this.addForm.controls['productBrand'].value)
          fd.append('productDescription', this.addForm.controls['productDescription'].value)
          fd.append('productPrice', this.addForm.controls['productPrice'].value)

          this.viewService.create(fd).subscribe(products => {
            this.products = products
            this.router.navigate(['/adminHome/view']);
          })

    }

  }

  onChange(){
    this.viewService.checkProductCode(this.addForm.value).subscribe(products => {
      if (products.length != 0) {
        this.isProductCodeExists = true;
      }
      else{
        this.isProductCodeExists=false;
      }
    })
  }
}





