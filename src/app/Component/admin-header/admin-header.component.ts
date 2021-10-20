import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {
  
  token:any;

  constructor(private router: Router,private snackbar: MatSnackBar) { }

  ngOnInit(): void {
  }
  LogOut(){
    localStorage.removeItem('token');
    localStorage.clear();
    this.router.navigate(['/orderlogin']);
    this.snackbar.open("Logged-Out Successfully",'',{ duration: 2000,});
  }
}
