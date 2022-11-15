import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RefreshButtonComponent } from './components/refresh-button/refresh-button.component';
import { HomeComponent } from './components/pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    RefreshButtonComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
