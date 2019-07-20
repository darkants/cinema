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
import {CoreModule} from './core/core.module';
/**
 * services
 */

/**
 * components
 */
import { AppComponent } from './app.component';
import {LocalStorageService} from './services/local-storage.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    LibsModule,
    CoreModule
  ],
  providers: [
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
