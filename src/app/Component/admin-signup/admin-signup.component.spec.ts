import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AdminSignupComponent } from './admin-signup.component';

describe('AdminSignupComponent', () => {
  let component: AdminSignupComponent;
  let fixture: ComponentFixture<AdminSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
                ReactiveFormsModule,
                HttpClientModule,
                MatSnackBarModule,
                MatFormFieldModule,
                MatInputModule,
                BrowserAnimationsModule,
                MatIconModule,
                MatCardModule
      ],
      declarations: [ AdminSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
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
