import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Product } from '../model/product';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-searchbook',
  templateUrl: './searchbook.component.html',
  styleUrls: ['./searchbook.component.css']
})
export class SearchbookComponent implements OnInit {
  searchProductForm:any;
  product!: Product;
  flag=false;
  displayX:string='none';
  constructor(
    private fb:FormBuilder,
    private service:BookService
  ) { }

  ngOnInit(): void {
    this.searchProductForm=this.fb.group({
      searchId: ['']
    })
  }
  searchBookById(){
    let id=this.searchProductForm.controls['searchId'].value;
    alert(id);
    this.service.getProductById(id).subscribe( data=>{
            this.product=data;
            this.displayX='block';
            this.flag=true;
    },
    error =>{
          this.flag=false
          this.displayX='block';
    }
  )
}

}
