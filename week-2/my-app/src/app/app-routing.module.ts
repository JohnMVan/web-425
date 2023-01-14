//Title:  app-routing.module.ts
//Author: John Vanhessche
//Date 14 January 2023
//Description:  TypeScript file for the App component.

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importing new component routes
import { HomeComponent } from './home/home.component';         
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';


//Defining routes
const routes: Routes = [
  {
    path: '',                           //default route for when a route isn't specified, pointing to HomeComponent
    component: HomeComponent
  },
  {
    path: 'home',                       //home route for Home Component    http://localhost:4200/home
    component: HomeComponent
  },
  {
    path: 'about',                     //about route for About Component   http://localhost:4200/about
    component: AboutComponent
  },
  {
    path: 'contact',                  //contact route for Contact Component.     http://localhost:4200/contact
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
