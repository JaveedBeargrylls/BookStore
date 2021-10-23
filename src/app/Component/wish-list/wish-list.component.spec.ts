import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

import { WishListComponent } from './wish-list.component';

describe('WishListComponent', () => {
  let component: WishListComponent;
  let fixture: ComponentFixture<WishListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ HttpClientModule,
                MatSnackBarModule,
                MatToolbarModule],
      declarations: [ WishListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('get wishList', () => {
    component.getWishlist();
    expect(component.getWishlist).toBeTruthy();
  });

  it('delete wishList', () => {
    component.deleteWishList([]);
    expect(component.deleteWishList).toBeTruthy();
  });
});
