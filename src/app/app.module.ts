import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



/*****Components*****/
import { AppComponent } from './app.component';
import { SignUpComponent } from './Component/sign-up/sign-up.component';
import { LoginComponent } from './Component/login/login.component';
import { ForgetPasswordComponent } from './Component/forget-password/forget-password.component';
import { OrderLoginComponent } from './Component/order-login/order-login.component';
import { CartComponent } from './Component/cart/cart.component';
import { WishListComponent } from './Component/wish-list/wish-list.component';
import { FooterComponent } from './Component/footer/footer.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { GetBooksComponent } from './Component/get-books/get-books.component';
import { HeaderComponent } from './Component/header/header.component';
import { PlaceOrderComponent } from './Component/place-order/place-order.component';
import { AboutBookComponent } from './Component/about-book/about-book.component';
import { RatingsComponent } from './Component/ratings/ratings.component';
import { AdminLoginComponent } from './Component/admin-login/admin-login.component';
import { AdminSignupComponent } from './Component/admin-signup/admin-signup.component';
import { AdminDashboardComponent } from './Component/admin-dashboard/admin-dashboard.component';
import { AdminHeaderComponent } from './Component/admin-header/admin-header.component';



/***********Services***************/ 
import { AuthguardService } from './Services/authGuardService/authguard.service';


/*******Added_Modules*************/ 
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {FlexLayoutModule} from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';




@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    ForgetPasswordComponent,
    OrderLoginComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    GetBooksComponent,
    CartComponent,
    WishListComponent,
    PlaceOrderComponent,
    AboutBookComponent,
    RatingsComponent,
    AdminLoginComponent,
    AdminSignupComponent,
    AdminDashboardComponent,
    AdminHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTabsModule,
    MatCardModule,
    MatDividerModule,
    MatToolbarModule,
    MatTooltipModule,
    MatExpansionModule,
    MatSelectModule,
    MatDialogModule,
    MatMenuModule,
    MatTableModule

  ],
  providers: [
    AuthguardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
