//Title:  app.component.ts
//Author: John Vanhessche
//Date 28 January 2023
//Description:  TypeScript file for the app component.

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string = 'Assignment 4.4 - Async Pipe';     //changed 4.4
}
