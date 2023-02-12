//Title:  base-layout.component.ts
//Author: John Vanhessche
//Date 10 February 2023
//Description:  TypeScript file for the base-layout component.

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  assignment: string;

  constructor() { 
    this.assignment = "Exercise 6.4 - Input Properties";
  }

  ngOnInit(): void {
  }

}
