//Title:  app.routing.modules.ts
//Author: John Vanhessche
//Date 21 January 2023
//Description:  TypeScript file for the app component.



import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importing components
import { ComposerListComponent } from './composer-list/composer-list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ComposerDetailsComponent } from './composer-details/composer-details.component';            //added in 3.2 part 1             

const routes: Routes = [
  //default route

  {
    path: '',
    component: ComposerListComponent
  },

  //Component routes
  {
    path: 'composer-list',
    component: ComposerListComponent
  },
  {
    path: 'composer-details/:composerId',                //added in 3.2 part 1
    component: ComposerDetailsComponent                 //the /:composerId is a place holder for what we'll pass in the route. it's the the route:
  },                                                    // http://localhost:4200/composer-details/101     with 101 being the composer id being routed to.
  {                                                     //The 101 can actually be anything, can be asdf, and ti will still go to this route.
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
