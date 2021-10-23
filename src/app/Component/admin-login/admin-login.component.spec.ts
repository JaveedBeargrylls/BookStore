import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { AdminLoginComponent } from './admin-login.component';

describe('AdminLoginComponent', () => {
  let component: AdminLoginComponent;
  let fixture: ComponentFixture<AdminLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
                HttpClientModule,
                RouterTestingModule,
                MatSnackBarModule,
                ReactiveFormsModule,
                MatFormFieldModule,
                MatInputModule,
                MatIconModule,
                BrowserAnimationsModule,
                MatCardModule

      ],
      declarations: [ AdminLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Test case for Submitted

  it('Login Submit test',() =>{
    component.submit();
    expect(component.submit).toBeTruthy();
  })

// Test case for email & password ngOninit

it('ngOnint password and email InValid test',() =>{
  
  component.loginForm.controls['email'].setValue('');
  component.loginForm.controls['password'].setValue('');
  expect(component.loginForm.valid).toBeFalsy();

})

it('ngOnint password and email valid test',() =>{
  component.loginForm.controls['email'].setValue('abc123@gmail.com');
  component.loginForm.controls['password'].setValue('Abc@123');
  expect(component.loginForm.valid).toBeTruthy();
})

});
