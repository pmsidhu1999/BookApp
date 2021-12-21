import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  productForm:any;
  message:string='';
  constructor(
    private formBuilder:FormBuilder,
    private service: BookService) { }

  ngOnInit(): void {
    this.productForm=this.formBuilder.group({
      name :[''],
      price:[''],
      ISBN:['']
  })
}
addProduct(){
  this.service.addProduct(this.productForm.value).subscribe(
     (data) => this.message="Book Added Sucessfully" ,
     (error) => this.message=error
  )
alert(this.productForm.get('name').value)
// console.log(this.productForm)
console.log(this.productForm.value)
}

}
