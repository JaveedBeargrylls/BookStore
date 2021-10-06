import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  token:any

  BaseUrl = environment.BaseUrl

  constructor(private http: HttpClient) {

  
    this.token = localStorage.getItem('token')




    //token
    console.log(this.token)
    
   }




   /**********POST-Service************/

   postService(url: string='', payload:any, tokenRequired: boolean = false, httpOptions:any){

    
    console.log(url);
    console.log(payload);
    console.log(httpOptions);
    console.log(tokenRequired);
    
    

    return this.http.post(url,payload,tokenRequired && httpOptions);
    
   }

   /**********GET-Service************/

   getService(url: string='',tokenRequired: boolean = false, httpOptions:any){

    console.log(url);

    return this.http.get(url, tokenRequired && httpOptions);
    
   }

}
