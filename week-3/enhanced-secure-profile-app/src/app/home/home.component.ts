//Title:  home.component.ts
//Author: John Vanhessche
//Date 21 January 2023
//Description:  TypeScript file for the home component.


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {  

  constructor(private route: ActivatedRoute) {
    
   }

  ngOnInit(): void {
  }

}
