import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookService } from 'src/app/Services/bookStoreService/book.service';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.scss']
})
export class AdminSignupComponent implements OnInit {
  signUpForm! : FormGroup
  

  hide = true;

  constructor(private formBuilder: FormBuilder, private service: BookService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {

    this.signUpForm = this.formBuilder.group({

      fullName: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(6)]],
      mobileNumber:['',Validators.required]
    });
  }

/******** submiting form***********/

  submit(){

    let data={

      fullName: this.signUpForm.value.fullName,
      email: this.signUpForm.value.email,
      password: this.signUpForm.value.password,
      mobileNumber: this.signUpForm.value.mobileNumber,
      service: "advance"

    }

    console.log(data);
    this.service.adminSignUp(data).subscribe(
      (response:any) => { 
        
      console.log(response);
      
      this.snackBar.open('Admin Signed Successfully','',{duration:2000,}); },

      (error) => {console.log(error);
      
        this.snackBar.open('Error at Admin-SignUP','try Again',{duration:2000,});
      });

  }

  get f() { return this.signUpForm.controls;}

}
