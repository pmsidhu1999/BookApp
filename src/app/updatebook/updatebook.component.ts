import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {
  message?:string;
  updateProductForm:any;
  id:number=0;
  constructor(
    private fb:FormBuilder,
    private service:BookService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.updateProductForm=this.fb.group({
      name : [''],
      author : [''],
      price: [''],
      ISBN:['']
    })
    this.id=this.route.snapshot.params["ust"]
    alert("selected id " + this.id)
    this.service.getProductById(this.id).subscribe( data=>{
      console.log(data)
        this.updateProductForm.patchValue(data);
    })
  }
  updateBook(){
    this.service.updateProduct(this.id,this.updateProductForm.value).subscribe(data=>{
        this.message =' Data Updated Sucessfully'
    },
    error=>{
      this.message ='Updation Failed'
    })
}

}
