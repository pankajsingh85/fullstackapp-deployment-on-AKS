import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ServiceabilityService } from 'src/app/service/serviceability.service';

@Component({
  selector: 'app-edit-serviceability',
  templateUrl: './edit-serviceability.component.html',
  styleUrls: ['./edit-serviceability.component.css']
})
export class EditServiceabilityComponent implements OnInit {
  editForm: FormGroup;
  products: any = null;
  submitted = false
  data = this.viewService.getData();
  pinCodePattern = "^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$";


  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private viewService: ServiceabilityService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      id:['',[Validators.required]],
      pinCode: ['', [Validators.required,Validators.pattern(this.pinCodePattern)]],
      productCode: ['', [Validators.required, Validators.min(1)]],
      quantity: ['', [Validators.required, Validators.min(0)]],
    });

    for (let s of this.data) {
      this.editForm.setValue({
        id:s.id,
        pinCode: s.pinCode,
        productCode: s.productCode,
        quantity:s.quantity
      });
    }
  }
  get f() { return this.editForm.controls; }

  onSubmit() {
    this.submitted = true
    if (this.editForm.invalid) {
      return;
    }
    console.log(this.editForm.value)
    this.viewService.update(this.editForm.value).subscribe(products => {
      this.products = products
      this.router.navigate(['/adminHome/view2']);
    })
  }
}