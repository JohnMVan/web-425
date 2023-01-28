//Title:  composer.service.ts
//Author: John Vanhessche
//Date 28 January 2023
//Description:  TypeScript file for the home component.


import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {

  composers: Array<IComposer>;
    
  //added the this.composers code via 4.2.  This is the interface for the service.
    constructor() {
        this.composers = [                 //array of json objects follows the format of the IComposers interface under composer.interface.ts
            
            {
                composerId: 100, fullName: "Ludwig van Beethoven", genre: "Classical"
            },
            {
                composerId: 101, fullName: "John Sebastian Bach", genre: "Classical"
            },
            {
                composerId: 102, fullName: "Wolfgang Amadeus Mozart", genre: "Classical"
            },
            {
                composerId: 103, fullName: "Joham Brahms", genre: "Classical"
            },
            {
                composerId: 104, fullName: "Joseph Haydn", genre: "Classical"
            },
           
          ]
    }

    //these functions serve as data access points for the created composer objects
    //this function returns the composers list from the constructor  .accessed in composer-list.component.ts
    getComposers() {
        return this.composers;
    }

    //this function returns a single composer based on the id passed to it.
    //need to loop through the composers to find the matching id.
    getComposer(composerId: number) {
        for (let composer of this.composers) {              //loop over the composer list array.  this.composers is set to an array of composers from constructor.
            if (composer.composerId === composerId) {      //matches composer.composerId property from composer list to the composerId that was passed in
                return composer;                            //if it finds a match, it returns the composer object associated with that id.
            }                                               //accessed in composer-details.component.ts
        }
    }
}
