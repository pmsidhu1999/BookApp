import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent implements OnInit {
  
    productList:Product[] =[]   // Empty Product List
  //inject service
    constructor(private service:BookService) { }

  ngOnInit(): void {
    this.service.getAllProduct().subscribe(data=>{
        this.productList=data;     
    })
  }
  deleteBook(id:any){
    this.service.deleteProduct(id).subscribe(data=>{
      alert("Deleted");
    },
    error=>{
      alert("Error");
    })
  }

}
