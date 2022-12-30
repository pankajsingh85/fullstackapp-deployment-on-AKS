import { Component,ChangeDetectorRef
,  OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  editForm: FormGroup;
  products: any = null;
  submitted = false
  selectedFile: File;
  username: any;
  data = this.viewService.getData();



  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private viewService: ProductService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      productCode: ['', [Validators.required]],
      productName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      productBrand: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      productPrice: ['', [Validators.required, Validators.min(100)]],
      productImage: ['', [Validators.required]],
      productDescription: ['', [Validators.required, Validators.maxLength(300), Validators.minLength(10)]],
    });



    for(let s of this.data){
      this.editForm.setValue({
        productCode: s.productCode,
        productName:s.productName ,
        productPrice:s.productPrice,
        productDescription:s.productDescription,
        productImage:s.productImage,
        productBrand:s.productBrand

      });
    }
  }
  get f() { return this.editForm.controls; }

  
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0]
    }

  onSubmit() {
    this.submitted = true
    if (this.editForm.invalid) {
      return;
    }

    console.warn(this.editForm.value);
    const fd = new FormData();
    fd.append('image', this.selectedFile)
    fd.append('productCode', this.editForm.controls['productCode'].value)
    fd.append('productName', this.editForm.controls['productName'].value)
    fd.append('productBrand', this.editForm.controls['productBrand'].value)
    fd.append('productDescription', this.editForm.controls['productDescription'].value)
    fd.append('productPrice', this.editForm.controls['productPrice'].value)

    this.viewService.update(fd).subscribe(products => {
      this.products = products
      this.router.navigate(['/adminHome/view']);
    })


}

}
















