import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';


import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;



  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
                RouterTestingModule,
                MatSnackBarModule,
                MatMenuModule,
                MatToolbarModule,
                BrowserAnimationsModule,
                MatBadgeModule,
                HttpClientModule
                  
      ],
      declarations: [ HeaderComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('LogoutTest', () => {
    component.LogOut();
    expect(component.LogOut).toBeTruthy();
  });

});
