import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { BookService } from 'src/app/Services/bookStoreService/book.service';
import { DataService } from 'src/app/Services/dataService/data.service';

import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
                RouterTestingModule,
                MatFormFieldModule,
                MatInputModule,
                ReactiveFormsModule,
                HttpClientModule,
                MatSnackBarModule,
                MatToolbarModule,
                BrowserAnimationsModule
      ],
      declarations: [ CartComponent ],
      providers: [ BookService,
                    DataService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //NgOninit tests

  it('ngOninit getCartList Test',()=>{
    component.getCartList();
    expect(component.getCartList).toBeTruthy();
  })

  it('ngOnInit BookingForm Invalid',()=>{
    component.BookingForm.controls['fullName'].setValue('');
    component.BookingForm.controls['phonenumber'].setValue('');
    component.BookingForm.controls['fullAddress'].setValue('');
    component.BookingForm.controls['addressType'].setValue('');
    component.BookingForm.controls['city'].setValue('');
    component.BookingForm.controls['state'].setValue('');
    expect(component.BookingForm.valid).toBeFalsy();
  });

  it('ngOnInit BookingForm Valid',()=>{
    component.BookingForm.controls['fullName'].setValue('xyz');
    component.BookingForm.controls['phonenumber'].setValue('9876543210');
    component.BookingForm.controls['fullAddress'].setValue('#1-23,village,city,state');
    component.BookingForm.controls['addressType'].setValue('home');
    component.BookingForm.controls['city'].setValue('Bangalore');
    component.BookingForm.controls['state'].setValue('Karnataka');
    expect(component.BookingForm.valid).toBeTruthy();
  });

  it('remove function',()=>{
    component.remove('data');
    expect(component.remove).toBeTruthy();
  });

  it('submit function',()=>{
    component.submit();
    expect(component.submit).toBeTruthy();
  });

  it('checkout function',()=>{
    component.checkout();
    expect(component.checkout).toBeTruthy();
  });
  
});
