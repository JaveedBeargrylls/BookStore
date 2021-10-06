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
import { HeaderComponent } from './Component/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    ForgetPasswordComponent,
    OrderLoginComponent,
    HeaderComponent
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
    MatToolbarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
