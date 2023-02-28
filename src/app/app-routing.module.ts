import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PreloadAllModules } from '@angular/router';
import { PreloadingStrategyService } from './services/preloading-strategy.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>  import('./website/website.module').then(m => m.WebsiteModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadingStrategyService} )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
