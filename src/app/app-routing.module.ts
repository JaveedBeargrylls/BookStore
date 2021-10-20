import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { FooterComponent } from './Component/footer/footer.component';
import { ForgetPasswordComponent } from './Component/forget-password/forget-password.component';
import { HeaderComponent } from './Component/header/header.component';
import { LoginComponent } from './Component/login/login.component';
import { OrderLoginComponent } from './Component/order-login/order-login.component';
import { SignUpComponent } from './Component/sign-up/sign-up.component';
import { AuthenticationGuard } from './AuthGuard/authentication.guard';
import { GetBooksComponent } from './Component/get-books/get-books.component';
import { CartComponent } from './Component/cart/cart.component';
import { WishListComponent } from './Component/wish-list/wish-list.component';
import { PlaceOrderComponent } from './Component/place-order/place-order.component';
import { AboutBookComponent } from './Component/about-book/about-book.component';
import { AdminSignupComponent } from './Component/admin-signup/admin-signup.component';
import { AdminLoginComponent } from './Component/admin-login/admin-login.component';
import { AdminDashboardComponent } from './Component/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signUp',component:SignUpComponent},
  {path:'forgetpassword',component:ForgetPasswordComponent},
  {path:'orderlogin',component:OrderLoginComponent},
  
  {path:'header',component:HeaderComponent},
  {path:'footer',component:FooterComponent},
  {path:'getbooks',component:GetBooksComponent},
  {path:'cart',component:CartComponent},
  {path:'placeorder',component:PlaceOrderComponent},

  {path:'',redirectTo:'orderlogin',pathMatch:'full'},
  
  {path:'details',component:AboutBookComponent},
  {path:'cart',component:CartComponent},
  {path:'wishlist',component:WishListComponent},

  {path:'adminSignup',component:AdminSignupComponent},
  {path:'adminLogin',component:AdminLoginComponent},


  {path:'adminDashboard',component:AdminDashboardComponent,canActivate:[AuthenticationGuard],
    children:[
                  {path:'adminSignup',component:AdminSignupComponent},
                  {path:'adminLogin',component:AdminLoginComponent},

              ]},

  {path:'dashboard',component:DashboardComponent,canActivate:[AuthenticationGuard],
  
  children:[
            {path:'',redirectTo:'home',pathMatch:'full'},
            {path:'home',component:GetBooksComponent},
            {path:'wishlist',component:WishListComponent},
            {path:'cart',component:CartComponent},
            {path:'details',component:AboutBookComponent},
            {path:'placeorder',component:PlaceOrderComponent}
  ]},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
