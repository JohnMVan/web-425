//Title:  signin.component.ts
//Author: John Vanhessche
//Date 21 January 2023
//Description:  TypeScript file for the signin component.


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  isLoggedIn = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  signin() {
    this.isLoggedIn = true;

    this.router.navigate(['/home'], {queryParams: {isLoggedIn: this.isLoggedIn}, skipLocationChange: true})  //setting value of queryParam object with the value of isLoggedIn 
  }                                                                                                          // which is assigned true from this.isLoggedIn = true;
                                                                                                            //passing this in the route, to execute in homcomponent.ts
                                                                                                            //setting queryParams: {isLoggedIn:....} needs to coincide with the name
}                                                                                                           // you are tyring to get in the .get(isLoggedIn) on the homecomponent.ts
