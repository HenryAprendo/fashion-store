import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [

  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'category',
        loadComponent: () => import('./pages/category/category.component').then(m => m.CategoryComponent)
      },
      {
        path: 'detail/:id',
        loadComponent: () => import('./pages/detail/detail.component').then(m => m.DetailComponent)
      },
      {
        path: 'shopping-cart',
        component: ShoppingCartComponent
      },
      {
        path: 'checkout-forms',
        loadComponent: () => import('./pages/checkout-forms/checkout-forms.component').then(m => m.CheckoutFormsComponent)
      },
      {
        path: 'login',
        component: LoginComponent
      }

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }


