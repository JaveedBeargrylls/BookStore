import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';

import { GetBooksComponent } from './get-books.component';

describe('GetBooksComponent', () => {
  let component: GetBooksComponent;
  let fixture: ComponentFixture<GetBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ HttpClientModule,
                RouterTestingModule,
                MatSnackBarModule,

        ],
      declarations: [ GetBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
