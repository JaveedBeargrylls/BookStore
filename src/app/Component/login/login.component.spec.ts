import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginComponent } from './login.component';

fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
          RouterTestingModule,
          HttpClientModule,
          MatSnackBarModule,
          MatFormFieldModule,
          ReactiveFormsModule,
          MatCardModule,
          MatInputModule,
          BrowserAnimationsModule,
          MatIconModule,
 ],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
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
