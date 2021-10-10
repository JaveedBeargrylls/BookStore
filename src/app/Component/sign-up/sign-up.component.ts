import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookService } from 'src/app/Services/bookStoreService/book.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {


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
    this.service.signUp(data).subscribe(
      (response:any) => { console.log(response);
      
      this.snackBar.open('Successfully Signed-Up','',{duration:2000,}); },

      (error) => {console.log(error);
      
        this.snackBar.open('Error at SignUP','try Again',{duration:2000,});
      });

  }

  get f() { return this.signUpForm.controls;}

}
