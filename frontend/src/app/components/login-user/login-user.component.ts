import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.less']
})

export class LoginUserComponent implements OnInit {
  loginForm: FormGroup;
  public users: any = null;
  submitted=false;
  isInvalid:Boolean;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private loginService: UserService) { }

  ngOnInit(): void {
   
    this.loginForm = this.formBuilder.group({
      email: ['',[ Validators.required,Validators.minLength(5),Validators.maxLength(30),Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(30)]]
    })
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted=true

    if (this.loginForm.invalid) {
      return;
  }
    this.loginService.login(this.loginForm.value)
      .subscribe(users => {
        this.users = users;
        if (users.length != 0) {
          console.log(this.users[0].name)
          localStorage.setItem('username',this.users[0].name)
          this.router.navigate(['/']);
        }
        else {
          this.isInvalid=true;
          this.router.navigate(['/login']);
        }
      });
  }
}