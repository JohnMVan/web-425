//Title:  app.component.ts
//Author: John Vanhessche
//Date 21 January 2023
//Description:  TypeScript file for the app component.

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string = 'Exercise 4.2 - Inversion of Control and Dependency Injection';
}
