// Create a Map
// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);

// Create a Map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);


//The get() method gets the value of a key in a Map
fruits.get("apples"); 
//The size property returns the number of elements in a Map
fruits.size;
//The delete() method removes a Map element
fruits.delete("apples");
//The clear() method removes all the elements from a Map
fruits.clear();
//The has() method returns true if a key exists in a Map
fruits.has("apples");




//The forEach()- method invokes a callback for each key/value pair in a Map
// List all entries

let text = "";
fruits.forEach (function(value, key) {
  text += key + ' = ' + value;
})