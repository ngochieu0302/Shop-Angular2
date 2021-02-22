import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';
import { ProductCategoryModule } from './product-category/product-category.module';
import { ProductModule } from './product/product.module';
import { HomeModule } from './home/home.module';
import { FunctionModule } from './function/function.module';
import { mainRoutes } from './main.routes';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    FunctionModule,
    HomeModule,
    ProductModule,
    ProductCategoryModule,
    UserModule,
    RoleModule,
    RouterModule.forChild(mainRoutes)
  ]
})
export class MainModule { }
