import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from './../shared/shared.module';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    SharedModule
  ]
})
export class WebsiteModule { }
