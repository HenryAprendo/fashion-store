import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerItemComponent } from './container-item/container-item.component';



@NgModule({
  declarations: [
    ContainerItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContainerItemComponent,
  ]
})
export class SharedModule { }
