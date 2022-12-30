import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  adminLoginForm: FormGroup;
  public users: any = null;
  submitted=false;
  isInvalid:Boolean=true;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminLoginForm = this.formBuilder.group({
      name: ['',[ Validators.required,Validators.minLength(4),Validators.maxLength(30)]],
      password: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(30)]]
    })
  }
  get f() { return this.adminLoginForm.controls; }

  onSubmit() {
    this.submitted=true

    if (this.adminLoginForm.invalid) {
      return;
  }
    this.adminService.login(this.adminLoginForm.value)
      .subscribe(users => {
        this.users = users;
        if (users.length != 0) {
          this.router.navigate(['/adminHome']);
        }
        else {
          this.isInvalid=false;
          this.router.navigate(['/loginAdmin']);
        }
      });
  }

}
