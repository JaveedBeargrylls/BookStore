import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { OrderLoginComponent } from './order-login.component';

describe('OrderLoginComponent', () => {
  let component: OrderLoginComponent;
  let fixture: ComponentFixture<OrderLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
                BrowserAnimationsModule,

      ],
      declarations: [ OrderLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
