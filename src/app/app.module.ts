import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from '../nav/nav.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
