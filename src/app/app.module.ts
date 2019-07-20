/**
 * libs or native elements
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
/**
 * app modules
 */
import { AppRoutingModule } from './app-routing.module';
import {LibsModule} from '../../libs/libs.module';
/**
 * services
 */

/**
 * components
 */
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LibsModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
