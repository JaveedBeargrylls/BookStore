import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookService } from 'src/app/Services/bookStoreService/book.service';
import { DataService } from 'src/app/Services/dataService/data.service';
import { LoginComponent } from '../login/login.component';
import { OrderLoginComponent } from '../order-login/order-login.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {


  constructor(private bookService:BookService,private dialog: MatDialog,private dataService:DataService,private snackbar:MatSnackBar) { }
  
  bookStoreArray:any=[];
  quantity:any;

  ngOnInit(): void {

    this.getCartList();
    this.dataService.recevieData.subscribe(
      (response:any)=>{
        console.log(response);
        this.getCartList();
      })
  }
      /****get-books****/
      getCartList(){

    
        this.bookService.getCartList().subscribe(
          (response: any) => { 
            
            console.log(response.result)
            
            this.bookStoreArray=response['result'];
    
            console.log("getBooksArray",this.bookStoreArray);
    
          })
      }

      remove(data:any){

        // let wishList ={
        //   data_id:this.data._id
        // }
      
        this.bookService.removeCart(data).subscribe(
          
            (response: any) => { 
              
              console.log('delete wishlist',response)
  
              this.dataService.sendData(response);
              this.snackbar.open("Removed from the Cart",'',{ duration: 2000,});

            },
            
            (error: any) => {console.log(error);
            });
      }

// /******dailouge box******/
// openDialog(): void {
//   const dialogRef = this.dialog.open(LoginComponent, {
//     width: '250px;',
//     height:'250px;',
    
//   });

//   dialogRef.afterClosed().subscribe(result => {
//     console.log('The dialog was closed');
//   });
// }

}

