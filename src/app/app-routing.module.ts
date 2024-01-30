import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full'
  },

  {
    path: 'app',
    loadChildren: () => import('./content/app/app/app.module').then( m => m.AppPageModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./content/test/test.module').then( m => m.TestPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
