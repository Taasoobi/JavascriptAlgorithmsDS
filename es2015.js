/**
 * Added Classes for Javascript in ES2015
 * some review for classes and objects
 */

//input



class Student {
    constructor(firstName, lastName){
        this.FIRSTname = firstName;
        this.LASTname = lastName;
    }

    eat(){
        console.log(this.FIRSTname + " ate da food.");
    }
}

let Janko = new Student("Carl", "Baggins");

console.log(Janko.FIRSTname + " " + Janko.LASTname);
Janko.eat();
