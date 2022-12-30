import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchService } from 'src/app/service/search.service';
import { ProductService } from 'src/app/service/product.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  

  products: any = null;
  singleProduct: any = null;
  username: any;
  searchForm: FormGroup;
  filterForm: FormGroup;
  isLogin: Boolean;
  price: any;
  productCode: Number;
  isData: Boolean = true
  noData: Boolean = false
  isClicked: Boolean = false;


  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private viewService: ProductService,
    private searchService: SearchService) { }

  ngOnInit(): void {

    this.searchForm = this.formBuilder.group({
      productBrand: ['', Validators.required],
      productName: ['', Validators.required],
      productCode: ['', Validators.required]
    })

    this.filterForm = this.formBuilder.group({
      productPrice: ['', Validators.required]
    })


    this.viewService.getAll()
      .subscribe(products => {
        this.products = products
      });

    //isLogin logic
    if (localStorage.getItem('username') == 'null') {
      this.isLogin = false;
    }
    else {
      this.isLogin = true;
      this.username = localStorage.getItem('username')
    }

  }




  OnSelectDetails(productCode: Number) {
    this.isClicked = true;
    if (this.isLogin == false && this.isClicked == true) {

      window.setTimeout(function () {
        const box = <HTMLElement>document.getElementById('box');
        box.style.visibility = 'visible';
        setTimeout(function () {
          box.style.visibility = 'hidden';
        }, 2000);
      }, 30);

    }
    else {
      this.router.navigate(['/details/' + productCode])
    }

  }




  OnSelectPrice(productCode: Number) {
    this.isClicked = true;
    if (this.isLogin == false && this.isClicked == true) {

      window.setTimeout(function () {
        const box = <HTMLElement>document.getElementById('box');
        box.style.visibility = 'visible';
        setTimeout(function () {
          box.style.visibility = 'hidden';
        }, 2000);
      }, 30);

    }

    else {
      this.viewService.getPrice(productCode)
        .subscribe(products => {
          this.singleProduct = products;
          this.price = this.singleProduct[0].productPrice
          this.productCode = this.singleProduct[0].productCode

        });
    }
  }


  onFilterSubmit() {
    if (this.isLogin == false) {
      alert("please login first!!")
      this.router.navigate(['/login'])
    }
    else {
      this.viewService.filterPrice(this.filterForm.value).subscribe(products => {
        if (products.length == 0) {
          this.isData = false
        }
        this.products = products;
      });
      this.isData = true;
    }
  }

  showValueOnFilterForm() {
    let selectValue = <HTMLElement>document.getElementById('selectValue');
    selectValue.innerHTML = this.filterForm.controls['productPrice'].value;
  }
  
  onlogout() {
    this.isLogin = false
    localStorage.setItem('username', 'null')
    this.router.navigate(['/'])
  }


  //search form Submit
  onSubmit() {
    let brandValue = this.searchForm.controls['productBrand'].value;
    let nameValue = this.searchForm.controls['productName'].value;
    let codeValue = this.searchForm.controls['productCode'].value;

    if (brandValue == '' && nameValue == '' && codeValue == '') {
      this.noData = true;
    } else {
      this.noData = false;
    }

    this.searchService.search(this.searchForm.value).subscribe(products => {
      this.products = products;
      if (products.length == 0) {
        this.isData = false
      }
    })
    this.isData = true;
  }

}
