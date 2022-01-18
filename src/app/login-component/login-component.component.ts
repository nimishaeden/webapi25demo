

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})

export class LoginComponentComponent implements OnInit {
  signupForm: FormGroup;


  constructor(private loginService: LoginService,private service: FormBuilder,private routeservice: Router, private toast: ToastrService) { }

  ngOnInit(): void {
    if (this.loginService.isLoggedIn) {
      this.routeservice.navigate(["home"])
    }
    this.createLoginform()
    console.log(this.loginService.isLoggedIn())
  }

  login(){
    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched()
      return
    }
    this.loginService.sendPostRequest(this.signupForm.value).subscribe((data: string)=>{
      console.log(data);
      sessionStorage.setItem("token", data)
      this.navigatetohome()
    }, err => {
      this.toast.error('Invalid username/password')
    })
    console.log(this.signupForm.value)
  }
  createLoginform(){
    this.signupForm = this.service.group({
      Email:['', Validators.required],
      password:['', Validators.required]
    })
  }
  navigatetohome(){
    this.routeservice.navigate(["home"])
  }

  getErrorMessage() {
    if (this.signupForm.controls.Email?.hasError('required') || this.signupForm.controls.password?.hasError('required')) {
      return 'You must enter a value';
    }
  }
}
