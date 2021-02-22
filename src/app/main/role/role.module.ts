import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleComponent } from './role.component';

const roleRoutes : Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: RoleComponent }
]
@NgModule({
  declarations: [RoleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(roleRoutes)
  ]
})
export class RoleModule { }
