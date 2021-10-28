import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BookService } from '../../Services/bookStoreService/book.service';
import { DataService } from '../../Services/dataService/data.service';
import { AdminDeleteComponent } from '../admin-delete/admin-delete.component';

@Component({
  selector: 'app-admin-update',
  templateUrl: './admin-update.component.html',
  styleUrls: ['./admin-update.component.scss']
})
export class AdminUpdateComponent implements OnInit {
  image: any;
  author: any;
  bookName: any;
  description: any;
  price: any;
  quantity: any;

    constructor(public dialog: MatDialog,private dataService: DataService,private bookservice:BookService,
    public dialogRef: MatDialogRef<AdminUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) 
    {

      console.log(data);
      this.image=data.image
      this.author=data.author
      this.bookName=data.bookName
      this.description=data.description
      this.price=data.price
      this.quantity=data.quantity

    }

  onNoClick(): void {
    this.dialogRef.close();
  }



  ngOnInit(): void {
  }

  updateBook(){

    let request ={
      Id: this.data._id,
      author: this.author,
      bookName: this.bookName,
      description: this.description,
      price: this.price,
      quantity: this.quantity
    }

    this.bookservice.updateBook(request).subscribe((result)=>{
      console.log(result);
      this.dataService.sendData(result);
      this.dialogRef.close();
    
    })
    
  }
      openDialog(){
    const dialogRef = this.dialog.open(AdminDeleteComponent, {
      width: '20%',
      data: this.data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
    });
    // window.location.reload();
  }

}
