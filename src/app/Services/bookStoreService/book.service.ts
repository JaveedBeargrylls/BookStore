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

    this.token = localStorage.getItem('token');
      console.log(this.token);
    
   }

   


   /******User*****SignUP***********/

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

   /*******User***Login************/
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


   /*****Admin******SignUP***********/

   adminSignUp(data:any){

    let httpAuthOptions = {

      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    };
    
    console.log(httpAuthOptions);
    console.log(data);
    // console.log(Authorization)
    

    return this.httpService.postService(this.BaseUrl+'/bookstore_user/admin/registration',data,false,httpAuthOptions)
   }

   /*****Admin*****Login************/
   adminLogin(data:any){

    let httpAuthOptions = {

      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token,
      })
    };
    
    console.log(httpAuthOptions);
    console.log(data);
    // console.log(Authorization)
    

    return this.httpService.postService(this.BaseUrl+'/bookstore_user/admin/login',data,false,httpAuthOptions)
   }


/*************Get Books*****************/

  getBooksService(){
    let httpAuthOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': this.token
      })
    };
    console.log(httpAuthOptions); 
    
    return this.httpService.getService(this.BaseUrl +'/bookstore_user/get/book',false,httpAuthOptions);

  }

/**********ADD to Cart************/

addToCartService(data:any){
  this.token = localStorage.getItem('token');
  let options = {
    headers: new HttpHeaders({
      'x-access-token': this.token,
      'Content-Type': 'application/json'
    })
  }
  return this.httpService.postService(this.BaseUrl+'/bookstore_user/add_cart_item/'+data._id,{},true, options);
}


/************Wish-List****POST***********/

  AddToWishList(data: any) {
    this.token = localStorage.getItem('token');
    let options = {
      headers: new HttpHeaders({
        'x-access-token': this.token,
        'Content-Type': 'application/json'
      })
    }
    return this.httpService.postService(this.BaseUrl+'/bookstore_user/add_wish_list/'+data._id,{},true, options);
  }

/************Wish-List****GET***********/

  getWishList(){

    let httpAuthOptions = {
      headers: new HttpHeaders({
        'x-access-token': this.token,
        'Content-Type': 'application/json'
      })
    }
    console.log(httpAuthOptions); 
    
    return this.httpService.getService(this.BaseUrl+'/bookstore_user/get_wishlist_items',true,httpAuthOptions);

  }

  /**********Wish-List*****Delete************/

  deleteWishList(data:any){

      this.token = localStorage.getItem('token');
      let options = {
        headers: new HttpHeaders({
          'x-access-token': this.token,
          'Content-Type': 'application/json'
        })
      }

    return this.httpService.deleteService(this.BaseUrl+'/bookstore_user/remove_wishlist_item/'+data.product_id._id,data,true,options)
   }

   /*****************cartList******GET******/

  getCartList(){

    let httpAuthOptions = {
      headers: new HttpHeaders({
        'x-access-token': this.token,
        'Content-Type': 'application/json'
      })
    }
    console.log(httpAuthOptions); 
    
    return this.httpService.getService(this.BaseUrl+'/bookstore_user/get_cart_items',true,httpAuthOptions);

  }

  removeCart(data:any){

    this.token = localStorage.getItem('token');
    let options = {
      headers: new HttpHeaders({
        'x-access-token': this.token,
        'Content-Type': 'application/json'
      })
    }

  return this.httpService.deleteService(this.BaseUrl+'/bookstore_user/remove_cart_item/'+data._id,data,true,options)
 }


/******Customer Details*********/

  putOrder(data:any){

    this.token = localStorage.getItem('token');
    let options = {
      headers: new HttpHeaders({
        'x-access-token': this.token,
        'Content-Type': 'application/json'
      })
    }

  return this.httpService.putService(this.BaseUrl+'/bookstore_user/edit_user',data,true,options)
 }

/**********Order***********/
  order(data: any) {
    this.token = localStorage.getItem('token');
    let options = {
      headers: new HttpHeaders({
        'x-access-token': this.token,
        'Content-Type': 'application/json'
      })
    }
    return this.httpService.postService(this.BaseUrl+'/bookstore_user/add/order',data,true, options);
  }

/************Feed-Back*****POST********/
  feedBack(review: any,data:any) {
    this.token = localStorage.getItem('token');
    let options = {
      headers: new HttpHeaders({
        'x-access-token': this.token,
        'Content-Type': 'application/json'
      })
    }
    return this.httpService.postService(this.BaseUrl+'/bookstore_user/add/feedback/'+data,review,true,options);
  }

/************Feed-Back*******GET***********/
  getfeedBack(id:any){

    let httpAuthOptions = {
      headers: new HttpHeaders({
        'x-access-token': this.token,
        'Content-Type': 'application/json'
      })
    }
    console.log(httpAuthOptions); 
    
    return this.httpService.getService(this.BaseUrl+'/bookstore_user/get/feedback/'+id,true,httpAuthOptions);

  }


}

