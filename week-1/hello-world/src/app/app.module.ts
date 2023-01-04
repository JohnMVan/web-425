// Title: app.module.ts
// Author: modified by John Vanhessche
// Date: 3 January 2023
// Description:  This is the .ts file for the app module.

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
