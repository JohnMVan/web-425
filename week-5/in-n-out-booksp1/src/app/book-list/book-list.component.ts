//Title:  book-list.component.ts
//Author: John Vanhessche
//Date 2 February 2023
//Description:  TypeScript file for the book-list component.

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
