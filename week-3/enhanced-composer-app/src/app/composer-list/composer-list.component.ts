//Title:  composer-list.component.ts
//Author: John Vanhessche
//Date 21 January 2023
//Description:  TypeScript file for the composer component.


import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';      //adding this so we can access the classes from IComposer.
import { Composer } from '../composer.class';          //add to get access to composer class and associated functions.


@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})

export class ComposerListComponent implements OnInit {

  composers: Array<IComposer>;                //local component variable called composers, which is set to an array of IComposers.

  //create an array of composers.
  constructor() {
    this.composers = new Composer().getComposers();   //creating a new instance of the Composer class (which contains an array of IComposers).  We then call the
                                                      //getComposers function, which returns the array.
   }

  ngOnInit(): void {
  }
}
