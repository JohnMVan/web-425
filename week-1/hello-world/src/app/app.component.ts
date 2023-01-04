// Title: app.component.ts
// Author: modified by John Vanhessche
// Date: 3 January 2023
// Description:  This is the .ts file for the app component.

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myWorld = "You are now in John V's world"     //modified per exercise 1.3
}
