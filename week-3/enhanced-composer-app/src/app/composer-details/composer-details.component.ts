//Title:  composer-details.component.ts
//Author: John Vanhessche
//Date 21 January 2023
//Description:  TypeScript file for the composer component.



import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';   //added in 3.2 part 1
import { Composer } from '../composer.class';     //added 3.2 part 1
import { ActivatedRoute } from '@angular/router';   //added 3.2 part a

@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})
export class ComposerDetailsComponent implements OnInit {

  composerId: number;
  composer: IComposer;

  constructor(private route: ActivatedRoute) {               //pass in the ActivatedRoute.  Using the route to access the composerId value we clicked inside the path of the router file.
                                                            //call paraMmap.get function is used to get the composer id value we clicked on in the browser.
      this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId'), 10);    //composerId aligns with the /:composerId we added to the path in the routing module.

      if(this.composerId) {           //checking to see if there's a value in composerId
        this.composer = new Composer().getComposer(this.composerId)     //if there is a value, it's creating a new composer object, based on what's returned from getComposer function
      }                                                                  //this will be showed in the html code.
    
    }                                                        

  ngOnInit(): void {
  }

}
