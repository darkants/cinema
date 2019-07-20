/**
 * native elements
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


/**
 * main routes
 */
const routes: Routes = [
  {path: 'landing',
    loadChildren: () => import('./pages/components/main-page/main-page.module').then(mod => mod.MainPageModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
