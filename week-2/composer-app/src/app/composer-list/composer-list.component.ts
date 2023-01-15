//Title:  composer-list.component.ts
//Author: John Vanhessche
//Date 14 January 2023
//Description:  TypeScript file for the composer component.


import { Component, OnInit } from '@angular/core';

//new composer class
export default class Composer {
  fullName: string;
  genre: string;

  constructor(fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})

export class ComposerListComponent implements OnInit {

  composers: Array<Composer>;

  //create an array of composers.
  constructor() {
    this.composers = [
      new Composer("Ludwig van Beethoven", "Classical"),
      new Composer("John Sebastian Bach", "Classical"),
      new Composer("Wolfgang Amadeus Mozart", "Classical"),
      new Composer("Joham Brahms", "Classical"),
      new Composer("Joseph Haydn", "Classical"),
    ]
   }

  ngOnInit(): void {
  }
}
