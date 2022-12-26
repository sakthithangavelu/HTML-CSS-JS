// Create Variables
const a = "a";
const b = "b";
const c = 2;

// Create a Set
const letters = new Set();

// Add Variables to the Set
letters.add(a);
letters.add(b);
letters.add(c);

//size	Returns the number elements in a Set
console.log(letters)

//set methods
/*
new Set()	Creates a new Set
    add()	Adds a new element to the Set
delete ()	Removes an element from a Set
    has()	Returns true if a value exists
  clear()	Removes all elements from a Set
forEach()	Invokes a callback for each element
 values()	Returns an Iterator with all the values in a Set
   keys()	Same as values()
entries()	Returns an Iterator with the[value, value] pairs from a Set
*/