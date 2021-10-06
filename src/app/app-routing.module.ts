import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './Component/header/header.component';
import { LoginComponent } from './Component/login/login.component';
import { OrderLoginComponent } from './Component/order-login/order-login.component';
import { SignUpComponent } from './Component/sign-up/sign-up.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signUp',component:SignUpComponent},
  {path:'orderLogin',component:OrderLoginComponent},
  {path:'dashboard',component:HeaderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
