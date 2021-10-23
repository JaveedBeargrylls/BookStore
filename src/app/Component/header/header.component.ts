import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BookService } from 'src/app/Services/bookStoreService/book.service';
import { DataService } from 'src/app/Services/dataService/data.service';

// import { AuthguardService } from '../../AuthGuard/authentication.guard'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  token:any;

  cartArray:any = [];

  constructor(private router: Router,private snackbar: MatSnackBar,private service:BookService, private dataService:DataService) { }

  ngOnInit(): void {
        this.dataService.recevieData.subscribe(
      (response:any)=>{
        // console.log(response);
        this.getCartList();})
  }
  LogOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/orderlogin']);
    this.snackbar.open("Logged-Out Successfully",'',{ duration: 2000,});
  }

  getCartList(){

    this.service.getCartList().subscribe(
      (response: any) => { 

          this.cartArray=response['result'];
          console.log("getBooksArray",this.cartArray);
          
    })
  }
  
}
