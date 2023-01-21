//Title:  signin.guard.spec.ts
//Author: John Vanhessche
//Date 14 January 2023
//Description:  TypeScript file for the signin guard component.


import { TestBed } from '@angular/core/testing';

import { SigninGuard } from './signin.guard';

describe('SigninGuard', () => {
  let guard: SigninGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SigninGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
