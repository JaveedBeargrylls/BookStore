import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookService } from '../../Services/bookStoreService/book.service';
import { Router } from '@angular/router';

import books from '../../jsonFiles/books.json';
import { DataService } from '../../Services/dataService/data.service';


@Component({
  selector: 'app-get-books',
  templateUrl: './get-books.component.html',
  styleUrls: ['./get-books.component.scss']
})
export class GetBooksComponent implements OnInit {
  
  bookStoreArray:any =[];
  token: any;
  data: any;
  id: any;

  show:any = true;

  

  // bookStoreArray:{ "bookName":any,"author":any,"quantity":any,"price":any}[]=books;


  
  constructor(private bookService: BookService,private router:Router,private snackbar:MatSnackBar,private dataService:DataService) { }

@Input() favBooks: any;

  ngOnInit(){

    this.token = localStorage.getItem('token')
    this.getBooks();

    this.dataService.recevieData.subscribe(
      (response:any)=>{
        console.log(response);
        this.recentGetBooks();})
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

  recentGetBooks(){

    this.bookStoreArray.reverse();
    
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
        this.dataService.sendData(response);

        
      },
      
      (error: any) => {console.log(error);
      });

}
/**********Details of books*************/ 
details(data:any){
  this.id = data._id;
  console.log("book-Id -> ",this.id);
  this.router.navigate(['/dashboard/details'],{state: { details: data,id: data._id } })
}

}
