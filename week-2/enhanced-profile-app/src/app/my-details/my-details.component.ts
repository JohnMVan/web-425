//Title:  my-details.component.ts
//Author: John Vanhessche
//Date 14 January 2023
//Description:  TypeScript file for the my-details component.


import { Component, OnInit } from '@angular/core';

export default class Person {            //this class will need to be implemented in the my-details.component.html file. 
                                        // we export it so it can be accessed via the @Component below.
  //local variables
  fullName:  string;             //these are properties of myProfile, which is created below.  myProfile.fullName is then used in the html file.
  favoriteFood: string;
  favoriteColor:  string;
  keywords = [
    "#TypeScript", "#2020", "#CodingWithAngular", "#ngOmaha"
  ];

  constructor(fullName: string, favoriteFood: string, favoriteColor: string) {

  //When variables are passed into the constructor, we are also setting the properties in the Person class.  So when fullName is passed in, it will set the fullName 
  //local variable above.

    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;    

  }

  //used to test class to ensure the data is binding correctly.
  toString() {
    console.log(`\n  Ful name: ${this.fullName}\n  Favorite food: ${this.favoriteFood}\n  Favorite color: ${this.favoriteColor}`)
  }

}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {

  myProfile: Person;            //inside the component we are creating a new variable called myProfile assigned with the data type of Person      
                                // this is the same as our example when we said myName: string;
  constructor() {
    this.myProfile = new Person("John Vanhessche", "Chinese", "Blue")     //instantiating a new person object with values for constructor.
    this.myProfile.toString()     //verifying that it's working.  You can see this in f12 on the browser window.
  }             

  ngOnInit(): void {
  }


}

