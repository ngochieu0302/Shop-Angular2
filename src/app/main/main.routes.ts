import { MainComponent } from './main.component';
import { Routes } from '@angular/router';

export const mainRoutes: Routes = [
    {
        path: '', component: MainComponent, children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'function', loadChildren: './function/function.module#FunctionModule' },
            { path: 'home', loadChildren: './home/home.module#HomeModule' },
            { path: 'product', loadChildren: './product/product.module#ProductModule' },
            { path: 'productCategory', loadChildren: './product-category/product-category.module#Product-categoryModule' },
            { path: 'user', loadChildren: './user/user.module#UserModule' },
            { path: 'role', loadChildren: './role/role.module#RoleModule' },
        ]
    }
]