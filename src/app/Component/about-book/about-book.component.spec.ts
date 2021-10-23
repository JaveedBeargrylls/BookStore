import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { GetBooksComponent } from '../get-books/get-books.component';
import { RatingsComponent } from '../ratings/ratings.component';

import { AboutBookComponent } from './about-book.component';

describe('AboutBookComponent', () => {
  let component: AboutBookComponent;
  let fixture: ComponentFixture<AboutBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ HttpClientModule,
                RouterTestingModule,
                MatDividerModule,
                MatSnackBarModule
              ],
      declarations: [ AboutBookComponent,
                      RatingsComponent,
                      GetBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('test case for Getdata AboutBook', () => {
    component.getData();
    expect(component.getData).toBeTruthy();
  })
});
