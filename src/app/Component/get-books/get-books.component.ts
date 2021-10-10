import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookService } from '../../Services/bookStoreService/book.service';

@Component({
  selector: 'app-get-books',
  templateUrl: './get-books.component.html',
  styleUrls: ['./get-books.component.scss']
})
export class GetBooksComponent implements OnInit {
  
  bookStoreArray:any=[];
  token: any;
  data: any;

  
  constructor(private bookService: BookService,private snackbar:MatSnackBar) { }

@Input() favBooks: any;

  ngOnInit(){

    this.token = localStorage.getItem('token')
    this.getBooks();
  }

  /****get-books****/
  getBooks(){

    
    this.bookService.getBooksService().subscribe(
      (response: any) => { 
        
        console.log(response.result)
        
        this.bookStoreArray=response['result'];

        console.log("getBooksArray",this.bookStoreArray);

      })
  }

/*******For-random-ratings**********/
rating(){
  const rate = Math.max((Math.random()*4)+1);
  return rate.toFixed(1);
}

/*************random-Images***************/
images:Array<any>=[
  {image:'',key:'1'},
  {image:'',key:'1'},
]
bookimage(){

}
/************Add_To_wishList*****************/

AddToWishList(data:any){

  // let wishList ={
  //   data_id:this.data._id
  // }

  this.bookService.AddToWishList(data).subscribe(
    
      (response: any) => { 
        
        console.log('Wishlist GetBooks.ts',response)
        this.snackbar.open("Added to WishList", '', { duration: 2000,});


      },
      
      (error: any) => {console.log(error);
      });
}



/************Add_To_Cart*****************/

AddToCart(data:any){

  this.bookService.addToCartService(data).subscribe(
    
      (response: any) => { 
        
        console.log('Add to cart',response)
        this.snackbar.open("Added to Cart", '', { duration: 2000,});
        
      },
      
      (error: any) => {console.log(error);
      });

}


}
