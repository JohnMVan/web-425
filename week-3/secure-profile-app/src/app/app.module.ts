//Title:  app.module.ts
//Author: John Vanhessche
//Date 21 January 2023
//Description:  TypeScript file for the app component.


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyImageComponent } from './my-image/my-image.component';
import { MyDetailsComponent } from './my-details/my-details.component';
import { HomeComponent } from './home/home.component';
import { AppRoutes } from './app.routing';                //add for the AppRoutes array created in app.routing.ts, 3.3 part 2
import { RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';                //add for the RouterModule so we can do navigation in our application. 3.3 part 2

@NgModule({
  declarations: [
    AppComponent,
    MyImageComponent,
    MyDetailsComponent,   
    HomeComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes)    //added 3.3 part 2, this imports the routes in our array from app.routing.ts
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
