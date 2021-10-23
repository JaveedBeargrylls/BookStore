import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  token:any

  BaseUrl = environment.BaseUrl

  constructor(private http: HttpClient) { }




   /**********POST-Service************/

   postService(url: string='', payload:any, tokenRequired: boolean =false, httpOptions:any=null){

    
    console.log(url);
    console.log(payload);
    console.log(httpOptions);
    console.log(tokenRequired);
    
    

    return this.http.post(url,payload,tokenRequired && httpOptions);
    
   }

   /**********GET-Service************/

   getService(url: string='',tokenRequired: boolean = false, httpOptions:any){

    console.log(url);
    console.log(httpOptions);
    console.log(tokenRequired);

    return this.http.get(url, tokenRequired && httpOptions);
    
   }

   deleteService(url:string='', payload: any,  tokenRequired:boolean=false, httpOption:any) {
    console.log(url);
    return this.http.delete(url, tokenRequired && httpOption)
  }

  putService(url:any, payload: any,  tokenRequired:boolean=false, httpOption:any) {
    console.log(url);
    return this.http.put(url,payload, tokenRequired && httpOption)
  }
  





  

}
