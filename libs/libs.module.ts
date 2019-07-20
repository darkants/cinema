import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MaterialModule} from './modules/material.module';


@NgModule({
  declarations: [
  HeaderComponent,
  FooterComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ]
})
export class LibsModule { }
