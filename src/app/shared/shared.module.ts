import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import {MaterialModule} from './libs/material.module';


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
    MaterialModule
  ]
})
export class SharedModule { }
