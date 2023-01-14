//Title:  app.component.ts
//Author: John Vanhessche
//Date 14 January 2023
//Description:  TypeScript file for the App component.


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
}
