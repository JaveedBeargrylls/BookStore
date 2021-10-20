import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
// import { AuthguardService } from '../../AuthGuard/authentication.guard'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
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
