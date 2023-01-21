//Title:  app.routing.ts
//Author: John Vanhessche
//Date 21 January 2023
//Description:  TypeScript file for the app component.


import { Routes } from '@angular/router';               //added in 3.2 part 2
import { HomeComponent } from './home/home.component';  //added in 3.2 part 2.  need to add the home component first ( ng g c home)
import { SigninComponent } from './signin/signin.component';

//creating our path (routes) array.
export const AppRoutes: Routes = [
    {
        path: '',
        component: SigninComponent
    }, 
    {
        path: 'home',
        component: HomeComponent 
    }
]
