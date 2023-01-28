//Title:  composer-list.component.ts
//Author: John Vanhessche
//Date 28 January 2023
//Description:  TypeScript file for the composer component.


import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';      //adding this so we can access the classes from IComposer.
import { ComposerService } from '../composer.service';        //add to get access to composer class and associated functions.


@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})

export class ComposerListComponent implements OnInit {

  composers: Array<IComposer>;                //local component variable called composers, which is set to an array of IComposers.

  //create an array of composers.
  constructor(private composerService: ComposerService) {    
    this.composers = this.composerService.getComposers();      //4.2  Instead of creating a new composer and accessing methods, we just use the service to get the get.Composers()
   }                                                          //as long as the service in injectable, as noted on the composer.services.ts file under @Injectable.

  ngOnInit(): void {
  }
}
