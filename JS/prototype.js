//PROTOTYPE - refers to the point from where where we inherited all the properties(object.prototype)

//single protoype ([[Prototype]]: Object) is visible when we create a object with literal as below
/*
var employee = {
    name : "Sakthi",
    age  : 21,
    dept : "LAMP"
}
console.log(employee)
*/


// two prototypes will be visible(bay: "LAMP"name: "Sakthi"[[Prototype]]: Objectconstructor: ƒ domain(name,bay)[[Prototype]]: Object) when we ceate object using constructor method

function domain(name,bay)
{
    this.name = name;
    this.bay = bay;
}
domain.prototype.year = 2022;  //The prototype property allows you to add new properties to objects constructors.
domain.prototype.getName = function() //The prototype property allows you to add new methods to objects constructors.
{
    return this.name;
}
domain.prototype.getBay = function()
{
    return this.bay;
}
var aspire = new domain("Sakthi","LAMP");
console.log(aspire);
