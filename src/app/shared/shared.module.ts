import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerItemComponent } from './container-item/container-item.component';
import { CategoryItemsComponent } from './category-items/category-items.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ContainerItemComponent,
    CategoryItemsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ContainerItemComponent,
    CategoryItemsComponent
  ]
})
export class SharedModule { }
