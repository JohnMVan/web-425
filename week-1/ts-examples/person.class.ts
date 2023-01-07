// Title:  person.class.ts
// Author:  John Vanhessche
// Date 6 January 2023
// Description:  person.class.ts file for assignment



import { IPerson } from "./person.interface";

class Person implements IPerson {
    
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let myName = new Person("John", "Vanhessche")
console.log(`My name is ${myName.firstName} ${myName.lastName}`);