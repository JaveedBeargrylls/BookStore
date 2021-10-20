import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/dataService/data.service';
import { BookService } from '../../Services/bookStoreService/book.service';


@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss']
})
export class RatingsComponent implements OnInit {

   currentfeedback : any;

  booksdata:any;
  bookStoreArray:any=[];
  token: any;
  id: any;
  comment: any;
  rating: any;
  value: any;
  
  constructor( private router:Router, private bookService:BookService,private snackbar:MatSnackBar,private dataService:DataService) {
          this.booksdata = this.router.getCurrentNavigation()?.extras.state;
    console.log(this.booksdata);
    

     }

  ngOnInit(): void {

    this.getFeedback()
    this.dataService.recevieData.subscribe(
      (response:any)=>{
        console.log(response);
        this.getFeedback();
      })
  
  }

  feedback(){


    try{ 
          let data={
      comment : this.comment,
      rating : this.value
    }
    this.id = this.booksdata.id;
    this.bookService.feedBack(data,this.id).subscribe(
    
      (response: any) => {
        console.log('reviewID',response);
        
        this.dataService.sendData(response);

        this.snackbar.open("FeedBack Successfull", '', { duration: 2000,});

      },
      
      (error: any) => {console.log(error);
      });

    }
    catch(error:any){
      console.log(error);
    }

  }



    // feedback(review:any){
    //   console.warn(review);
    //   console.log(this.booksdata.id);
    // this.currentfeedback = review;
    // }

  getFeedback(){
    try{
      this.bookService.getfeedBack(this.booksdata.id).subscribe(
      (response: any) => { 
        
        console.log(response.result)
        
        this.bookStoreArray=response['result'];
        
        console.log("getBooksArray",this.bookStoreArray);

      })
    }
    catch(error:any){
      console.log(error);
      
    }
  }
}
