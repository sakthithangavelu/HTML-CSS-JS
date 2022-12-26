//A symbol is just a piece of memory in which you can store some data. 
const symbol1 = Symbol()
const symbol2 = Symbol()
console.log(typeof(symbol1));
console.log(symbol1===symbol2); 
const symbol3 = Symbol("Aspire")
const symbol4 = Symbol("Systems")
console.log(symbol3);
console.log(symbol4); 
console.log(symbol3===symbol4); 

/*
*A symbol can be used with classes to define the properties in the class. 
*The advantage is that if property is a symbol as shown below, the property 
can be accessed outside the package only if the symbol name is known.
*So, data is much encapsulated when symbols are used as properties.
*/

const NAME = Symbol()
const ACEID = Symbol()
const BAY = Symbol()

class Employee{
    constructor(name,aceid,bay)
    {
        this.NAME = name;
        this.ACEID = aceid;
        this.BAY = bay;
    }
}
let employee = new Employee("Sakthi",10449,"Hercules");
console.log(employee)
console.log(employee.ACEID);