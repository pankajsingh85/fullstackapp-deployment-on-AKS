import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ServiceabilityService } from 'src/app/service/serviceability.service';


@Component({
  selector: 'app-add-serviceability',
  templateUrl: './add-serviceability.component.html',
  styleUrls: ['./add-serviceability.component.css']
})
export class AddServiceabilityComponent implements OnInit {
  addForm: FormGroup;
  products: any = null;
  submitted = false
  pinCodePattern = "^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$";


  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private viewService: ServiceabilityService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      pinCode: ['', [Validators.required,Validators.pattern(this.pinCodePattern)]],
      productCode: ['', [Validators.required, Validators.min(1)]],
      quantity:['', [Validators.required, Validators.min(0)]]
    });
  }
  get f() { return this.addForm.controls; }

  onSubmit() {
    this.submitted = true
    if (this.addForm.invalid) {
      return;
    }
    console.log(this.addForm.value)
    this.viewService.create(this.addForm.value).subscribe(products => {
      this.products = products
      this.router.navigate(['/adminHome/view2']);
    })
  }
}

