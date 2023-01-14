//Title:  app.component.ts
//Author: John Vanhessche
//Date 14 January 2023
//Description:  TypeScript file for the app component.

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn: Boolean = true;      //checking boolean variable for logged in, displaying or hiding results in html file.
  assignment: string = 'Exercise 2.3 - Data Binding';     //new assignment name
}
