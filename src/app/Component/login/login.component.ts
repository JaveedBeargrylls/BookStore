import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from 'src/app/Services/bookStoreService/book.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm! : FormGroup;

  hide: boolean = true;
  logindata: any;

   show: boolean = true;
   
  constructor(private service: BookService, private router: Router,private snackbar: MatSnackBar,private formBuilder: FormBuilder,) { }

  
  ngOnInit(): void {

    this.loginForm= this.formBuilder.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(6)]]
    });
  }


  submit(){
      
    console.log("on submit function calling for login",this.loginForm.value);
    let logindata = {

      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
      service: "advance"

    };

    console.log("loginRequest",logindata)
    this.service.login(logindata).subscribe(
      
      (respone:any) => {console.log("login Response",respone);

      localStorage.setItem("token",respone.result.accessToken);
      
      this.router.navigateByUrl('/dashboard'),
      this.snackbar.open("Login successfull", '', { duration: 2000,});
    },
    (error:any) => { 

      console.log(error)
      this.snackbar.open("Login UnSuccessfull", 'try Again', { duration: 2000, });
    });

    return this.logindata
  }

    adminsubmit(){
    
    console.log("on submit function calling for login",this.loginForm.value);
    let logindata = {

      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
      service: "advance"

    };

    console.log("loginRequest",logindata)
    this.service.adminLogin(logindata).subscribe(
      
      (respone:any) => {console.log("login Response",respone);

      localStorage.setItem("token",respone.result.accessToken);
      
      this.router.navigateByUrl('/adminDashboard/adminBooks'),
      this.snackbar.open("Login successfull", '', { duration: 2000,});

      
    },
    (error:any) => { 

      console.log(error)
      this.snackbar.open("Login UnSuccessfull", 'try Again', { duration: 2000, });
    });
  }
  get f() { return this.loginForm.controls; }
}
