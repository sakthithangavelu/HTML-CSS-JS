class Voter{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}
var election = new Voter("Sakthi",21);
console.log(election);

/* Class inheritance */
class Voter1 extends Voter{
  constructor(name,age,city)
  {
    super(name,age)           //using super to refer the parent class constuctors
    this.city = city;
  }
}
var update = new Voter1("Subash Kannan",22,"Chennai");
console.log(update);

/*
"use strict"; // make sure the variables are declared with keywords
 let a = "sakthi";
console.log(a)
*/