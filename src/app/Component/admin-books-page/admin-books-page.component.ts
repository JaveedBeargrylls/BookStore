import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../../Services/bookStoreService/book.service';
import {MatDialog} from '@angular/material/dialog';
import { AboutBookComponent } from '../../../app/Component/about-book/about-book.component';
import { AdminUpdateComponent } from '../admin-update/admin-update.component';
import { DataService } from 'src/app/Services/dataService/data.service';



@Component({
  selector: 'app-admin-books-page',
  templateUrl: './admin-books-page.component.html',
  styleUrls: ['./admin-books-page.component.scss']
})
export class AdminBooksPageComponent implements OnInit {
  id: any;

  constructor(private bookService: BookService,private router: Router,public dialog: MatDialog,private dataService: DataService) { }

  bookStoreArray:any =[];
  // bookName: any;
  // position: any;
  // weight: any;
  // symbol: any;
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];


  ngOnInit(): void {
    this.getBooks();
    this.dataService.recevieData.subscribe(
      (response:any)=>{
        console.log(response);
        this.getBooks();})
  }

    getBooks(){

    this.bookService.getBooksService().subscribe(
      (response: any) => { 
        
        console.log(response.result)
        
        this.bookStoreArray=response['result'];

        console.log("getBooksArray",this.bookStoreArray);

      })
  }
  details(data:any){
  this.id = data._id;
  console.log("book-Id -> ",this.id);
  this.router.navigate(['/dashboard/details'],{state: { details: data,id: data._id } })
}

  openDialog(book:any){
    const dialogRef = this.dialog.open(AdminUpdateComponent, {
      width: '40%',
      data: book
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
    });
    // window.location.reload();
  }



}
