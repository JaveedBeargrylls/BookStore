import { Component, OnInit } from '@angular/core';
import { BookService } from '../../Services/bookStoreService/book.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-about-book',
  templateUrl: './about-book.component.html',
  styleUrls: ['./about-book.component.scss']
})
export class AboutBookComponent implements OnInit {

  booksdata:any;
  bookStoreArray:any=[];
  token: any;

  currentValue:any;
  value:any;


  
  constructor(private bookService:BookService,private router: Router) {

    this.booksdata = this.router.getCurrentNavigation()?.extras.state;
    console.log(this.booksdata);

   }

    getValue(data:any){
    console.warn(data);
    this.currentValue=data
    
  }
  ngOnInit(): void {

  this.getData()
  
}

  getData=() =>{

          try{
                this.booksdata = this.booksdata['details'];

              console.log(this.booksdata);
              
          }
          catch(error:any){
            console.log(error);
            
          }
} 
}
