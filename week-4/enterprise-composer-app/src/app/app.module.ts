//Title:  app.module.ts
//Author: John Vanhessche
//Date 28 January 2023
//Description:  TypeScript file for the app component.


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ComposerDetailsComponent } from './composer-details/composer-details.component';
import { RouterModule} from '@angular/router';    //added in 3.2 part 1, imported because we need the router to be able to pass data //the routing will enable us to choose a composer from the composer LIst table and go to that composers details.
import { FormsModule, ReactiveFormsModule } from '@angular/forms';    //added 4.3

@NgModule({                                        
  declarations: [
    AppComponent,
    ComposerListComponent,
    ContactComponent,
    AboutComponent,
    ComposerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,                             //added in 3.2 part 1
    FormsModule,               //added 4.3
    ReactiveFormsModule     //added 4.3
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
