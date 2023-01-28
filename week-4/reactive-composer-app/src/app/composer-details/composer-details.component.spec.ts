//Title:  composer-details.component.ts
//Author: John Vanhessche
//Date 21 January 2023
//Description:  TypeScript file for the composer component.


import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposerDetailsComponent } from './composer-details.component';     //added new route 3.2 part 1.

describe('ComposerDetailsComponent', () => {
  let component: ComposerDetailsComponent;
  let fixture: ComponentFixture<ComposerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposerDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
