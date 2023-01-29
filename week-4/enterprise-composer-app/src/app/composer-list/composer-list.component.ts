//Title:  composer-list.component.ts
//Author: John Vanhessche
//Date 28 January 2023
//Description:  TypeScript file for the composer component.


import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';      //adding this so we can access the classes from IComposer.
import { ComposerService } from '../composer.service';        //add to get access to composer class and associated functions.
import { FormControl } from '@angular/forms';   //added 4.3
import { debounceTime } from 'rxjs/operators';   //added 4.3
import { Observable } from 'rxjs';   //added 4.4


@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})

export class ComposerListComponent implements OnInit {

  composers: Observable<IComposer[]>;       //updated 4.4, changed type from service instance to observable array of IComposer data type.
  txtSearchControl = new FormControl('');   //added 4.3

  //create an array of composers.
  constructor(private composerService: ComposerService) {    
    this.composers = this.composerService.getComposers();      //4.2  Instead of creating a new composer and accessing methods, we just use the service to get the get.Composers() //as long as the service in injectable, as noted on the composer.services.ts file under @Injectable.
    
    //added 4.3---anytime text is entered into the txtSearchControl, that value will change and emit the valueChanges event
    //after 500 milliseconds call the filterComposers function.
    //the debounce time has been added to slow down the search field, otherwise every character entered triggers a new call to the change event.
    //we want the user to have enough time to enter something in before calling the filterComposers function.
    this.txtSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val => this.filterComposers(val.toLowerCase()));  //added 4.3, updated val.toLowerCase() in 4.4

  }                                                          

  ngOnInit(): void {
  }

  filterComposers(name: string) {
    
    //added 4.4 - this calls the composerService.filterComposer() function and assigns to this.composers variable.
    // however, this is only working on the name for now.  the number is not being filtered.
    this.composers = this.composerService.filterComposers(name);
  }


}
