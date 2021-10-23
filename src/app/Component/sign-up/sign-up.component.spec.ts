import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpComponent } from './sign-up.component';

import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { BookService } from 'src/app/Services/bookStoreService/book.service';
import { By } from '@angular/platform-browser';


describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
        
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        MatSnackBarModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatCardModule
        ],
      declarations: [ SignUpComponent ],
      providers:[ BookService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

    it('should create', () => {
    expect(component).toBeTruthy();
  });


  // test case for submit
  it('SignUP submit test',()=>{
    component.submit();
    expect(component.submit).toBeTruthy();
  });

  //SignUpform test cases

  it('ngOninit Invalid Test',()=>{
    component.signUpForm.controls['fullName'].setValue('');
    component.signUpForm.controls['email'].setValue('');
    component.signUpForm.controls['password'].setValue('');
    component.signUpForm.controls['mobileNumber'].setValue('');
    expect(component.signUpForm.valid).toBeFalsy();
  });

  it('ngOninit valid Test',()=>{
    component.signUpForm.controls['fullName'].setValue('abcdef');
    component.signUpForm.controls['email'].setValue('abc@gmail.com');
    component.signUpForm.controls['password'].setValue('123456');
    component.signUpForm.controls['mobileNumber'].setValue('9876543210');
    expect(component.signUpForm.valid).toBeTruthy();
  });

});
