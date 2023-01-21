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

  isLoggedIn: Boolean;      //checking boolean variable for logged in, displaying or hiding results in html file.

  constructor(private route: ActivatedRoute) {
    this.isLoggedIn = Boolean(this.route.snapshot.queryParamMap.get('isLoggedIn'));  //using activated route,  using queryParamMap function to get isLoggedIn
   }

  ngOnInit(): void {
  }

}
