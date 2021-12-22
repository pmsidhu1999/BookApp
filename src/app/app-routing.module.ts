import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { SearchbookComponent } from './searchbook/searchbook.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';

const routes: Routes = [
  {path:'add-product',component:AddproductComponent},
   {path:'list-product',component:ListproductComponent},
   {path:'search-book',component:SearchbookComponent},
   {path:'update-book/:ust',component:UpdatebookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
