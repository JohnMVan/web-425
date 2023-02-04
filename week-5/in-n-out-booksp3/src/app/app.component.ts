//Title:  app.component.ts
//Author: John Vanhessche
//Date 2 February 2023
//Description:  TypeScript file for the app component.

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  assignment: string;

  constructor() {
    this.assignment = 'Assignment 5.4 - Dialogs';
  }  
}
