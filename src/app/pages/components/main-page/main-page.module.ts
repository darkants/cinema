/**
 * native elements
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/**
 * modules
 */
import { MainPageRoutingModule } from './main-page-routing.module';
/**
 * components
 */
import {MainPageComponent} from './main-page.component';


@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule
  ]
})
export class MainPageModule { }
