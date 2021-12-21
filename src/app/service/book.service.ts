import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  url="http://localhost:3000/books"; 
  constructor(private httpClient:HttpClient) { }
   addProduct(product:Product):Observable<Product>{
      // console.log('Inside Service' + product.name)
       let productHeader =new HttpHeaders({'Content-Type' : 'application/json'});
       // Convert Object into JSON 
       let productJson=JSON.stringify(product);
       let data=this.httpClient.post<Product>(this.url,productJson,
                  {headers:productHeader});
     //  data.forEach(x=>{
      //    console.log(`${x.name} ${x.price} ${x.quantity}`)
      //  })
       return data;
 }
  getAllProduct():Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.url);
  }

}
