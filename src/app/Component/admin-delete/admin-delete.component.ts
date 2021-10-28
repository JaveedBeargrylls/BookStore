import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BookService } from '../../Services/bookStoreService/book.service';
import { DataService } from '../../Services/dataService/data.service';


@Component({
  selector: 'app-admin-delete',
  templateUrl: './admin-delete.component.html',
  styleUrls: ['./admin-delete.component.scss']
})
export class AdminDeleteComponent implements OnInit {

    constructor(private dataService: DataService,private bookservice:BookService,
    public dialogRef: MatDialogRef<AdminDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
  }

    deleteBook(){

    let request ={
      Id: this.data._id,
    }

    this.bookservice.deleteBook(request).subscribe((result)=>{
      console.log(result);
      this.dataService.sendData(result);
      this.dialogRef.close();
    
    })
    
  }
  close(){
   this.dialogRef.close(); 
  }

}
