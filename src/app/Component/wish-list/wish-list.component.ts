import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookService } from '../../Services/bookStoreService/book.service';
import { DataService } from '../../Services/dataService/data.service';

import books from '../../jsonFiles/wishlist.json'
@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {

  constructor(private bookService:BookService, private dataService:DataService,private snackbar:MatSnackBar) { }

  bookStoreArray:any=[];

  // bookStoreArray:{ "bookName":any,"author":any,"quantity":any,"price":any}[]=books;




  ngOnInit(): void {

    this.getWishlist()
    this.dataService.recevieData.subscribe(
      (response:any)=>{
        console.log(response);
        this.getWishlist();
      })
  }


    /****get-books****/
    getWishlist(){

    
      this.bookService.getWishList().subscribe(
        (response: any) => { 
          
          console.log(response.result)
          
          this.bookStoreArray=response['result'];
  
          console.log("getBooksArray",this.bookStoreArray);
  
        })
    }

    /*******delte-list*********/

    deleteWishList(data:any){

      // let wishList ={
      //   data_id:this.data._id
      // }
    
      try{
              this.bookService.deleteWishList(data).subscribe(
        
          (response: any) => { 
            
            console.log('delete wishlist',response)

            this.dataService.sendData(response);
            this.snackbar.open("Removed from WishList", '', { duration: 2000,});
            
    
    
          },
          
          (error: any) => {console.log(error);
          });
      }
      catch(error){
          console.log(error);
          
      }
    }
    
}
