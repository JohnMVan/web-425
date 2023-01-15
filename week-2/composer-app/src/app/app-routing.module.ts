//Title:  app.routing.modules.ts
//Author: John Vanhessche
//Date 14 January 2023
//Description:  TypeScript file for the app component.



import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importing components
import { ComposerListComponent } from './composer-list/composer-list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

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
