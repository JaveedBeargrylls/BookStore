import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';

import { RatingsComponent } from './ratings.component';

describe('RatingsComponent', () => {
  let component: RatingsComponent;
  let fixture: ComponentFixture<RatingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
                HttpClientModule,
                RouterTestingModule,
                MatSnackBarModule,

      ],
      declarations: [ RatingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('feed back test', () => {
    component.feedback();
    expect(component.feedback).toBeTruthy();
  });

  it('get feedBack test', () => {
    component.getFeedback();
    expect(component.getFeedback).toBeTruthy();
  })
});
