import { Component, OnInit } from '@angular/core';
import { MustMatch } from 'src/app/validator/mustMatchValidator';
import { UserService } from 'src/app/service/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  registerForm: FormGroup;
  users: any = null;
  submitted = false;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  isEmailExists: Boolean = false;
  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private loginService: UserService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30), Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]]
    },
      {
        validator: MustMatch('password', 'confirmPassword'),
      });
  }

  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    else {
      console.warn(this.registerForm.value);
      this.loginService.register(this.registerForm.value)
        .subscribe(users => {
          this.users = users
          this.router.navigate(['/login']);
        });
    }


  }


  onChange() {
    this.loginService.checkUser(this.registerForm.value).subscribe(users => {
      if (users.length != 0) {
        this.isEmailExists = true;
      }
      else{
        this.isEmailExists=false;
      }
    })

  }

}