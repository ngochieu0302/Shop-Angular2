import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCategoryComponent } from './product-category.component';

const productCategoryRoutes : Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: ProductCategoryComponent }
];
@NgModule({
  declarations: [ProductCategoryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(productCategoryRoutes)
  ]
})
export class ProductCategoryModule { }
