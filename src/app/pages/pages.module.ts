import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainPageModule} from './components/main-page/main-page.module';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    MainPageModule
  ],
  exports: [
    MainPageModule
  ]
})
export class PagesModule { }
