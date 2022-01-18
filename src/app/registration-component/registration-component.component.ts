import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-component',
  templateUrl: './registration-component.component.html',
  styleUrls: ['./registration-component.component.css']
})
export class RegistrationComponentComponent implements OnInit {
  userRegisterForm: FormGroup;
  products = [];
  constructor(private dataService: DataService,private regService: FormBuilder,private toast: ToastrService,private routeservice: Router) { }

  ngOnInit(): void {
    this.createRegisterform()


  }

  register(){
    if (this.userRegisterForm.invalid) {
      this.userRegisterForm.markAllAsTouched()
      return
    }

    this.dataService.sendPostRequest(this.userRegisterForm.value, "api/user").subscribe((data: any[])=>{
      console.log(data);
      this.products = data;
      this.toast.success('Registration Success')
      this.routeservice.navigate(["login"])
    })
    console.log(this.userRegisterForm.value)
  }
  createRegisterform(){
    this.userRegisterForm = this.regService.group({
      userFirstName:[''],
      userLastName:[''],
      phoneNumber:[''],
      email:[''],
      password:['']
    })
  }
  getErrorMessage() {
    if (this.userRegisterForm.controls.userFirstName?.hasError('required') || this.userRegisterForm.controls.userLastName?.hasError('required')) {
      return 'You must enter a value';
    }
  }
}
