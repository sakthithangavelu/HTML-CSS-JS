/*
const name = "sakthi\'s";              //escape characters 
const myname = `Welcome,${name}`;      //concatenation using back ticks  ` ` 
console.log(name);
console.log(myname);

const output = `I like the song.    
I gave it a score of 90%.`;           //multi line strings using back ticks
console.log(output);
*/

var first = "Learning Javascript";
var second = "For the review";

console.log(first.length);
console.log(first.includes("ning"));
console.log(first.startsWith("L"));
console.log(second.endsWith("w"));
console.log(first.indexOf("p"));
console.log(first.indexOf("Javascript"));
console.log(second.slice(0,5));
console.log(second.slice(5));
console.log(second.toLowerCase());
console.log(second.toUpperCase());
console.log(second.replace("review","interview"));
console.log(second.replaceAll("For","to"));
console.log(first.charAt(6));
console.log(first.charCodeAt(6));  //returns the unicode char value depending upon the index
console.log(first.concat(second));
console.log(first.split(' ',2));
console.log(second.toString());
console.log(first.match("Learning"));
// console.log(first.idexOf());


