import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { environment } from '../../../environments/environment'
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  BaseUrl = environment.BaseUrl
  token: any

  constructor(private httpService: HttpService) {

    // this.token = localStorage.getItem('token')
    // console.log(this.token);
    
   }



   /***********SignUP***********/

   signUp(data:any){

    let httpAuthOptions = {

      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    };
    
    console.log(httpAuthOptions);
    console.log(data);
    // console.log(Authorization)
    

    return this.httpService.postService(this.BaseUrl+'/bookstore_user/registration',data,false,httpAuthOptions)
   }

   /**********Login************/
   login(data:any){

    let httpAuthOptions = {

      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token,
      })
    };
    
    console.log(httpAuthOptions);
    console.log(data);
    // console.log(Authorization)
    

    return this.httpService.postService(this.BaseUrl+'/bookstore_user/login',data,false,httpAuthOptions)
   }
  }
