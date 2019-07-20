/**
 * native elements
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/**
 * components
 */
import {MainPageComponent} from './main-page.component';

/**
 * child routes
 */
const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule { }
