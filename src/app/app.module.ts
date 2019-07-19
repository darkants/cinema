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
import {SharedModule} from './shared/shared.module';
import {PagesModule} from './pages/pages.module';
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
    SharedModule,
    PagesModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
