// var domains = ["Java","Dotnet","Lamp","Testing"];
// document.write(domains.length); 
// document.write("<br>");
// document.write(domains);                   //prints all array elements stored in variable domains
// document.write("<br>");
// domains.push("Python");                    //adds an element into an array
// domains.pop();                             // deletes an element into an array
// domains.pop();
// domains.push("C++");
// domains.push(10449);                       //arrays in js can store heterogeneous values
// domains.push(true);
// domains[0] = "Python" ;                    //modify array element using index number
// document.write(domains.indexOf("Dotnet")); //finding the index of elements inside an array
// document.write(domains[2]);
// for(var i=0; i<domains.length; i++)        //length is used here to automatically detect the array size after every operations instead of declaring every single time....
// {
//     document.write(domains[i]);
// }
// document.write("<br>");

// const random = ['tree', 795, [0, 1, 2]];   //an array inside an array is called a multidimensional array.
// document.write(random[2][1]);              // You can access an item inside an array that is itself inside another array by chaining two sets of square brackets together.


// const cities = ['Manchester', 'Liverpool'];
// const removedCity = cities.pop();
// console.log(removedCity);                    // The pop() returns the item that was removed. Saved that item in a new variable.


// const cities = ['Manchester', 'Liverpool'];
// cities.shift();                                 // shift() removes first element in an array
// console.log(cities);     


// const cities = ['Manchester', 'Liverpool', 'Edinburgh', 'Carlisle'];
// console.log(cities.splice(2,3));                     //splice()-the first argument says where to start removing items, and the second argument says how many items should be removed




                /*FOR OF*/


// const birds = ['Parrot', 'Falcon', 'Owl'];
// for (const bird of birds) {                            
//   document.write(bird);
// }


// const iterable = [10, 20, 30];
// for (let value of iterable) {
//   value += 1;
//   console.log(value);
// }


// const iterable = "SAKTHIVEL";
// for (const value of iterable) {
//   console.log(value);
// }const iterable = [10, 20, 30];


// for (let value of iterable) {
//   value += 1;
//   console.log(value);
// }

 /*               map()              */

// function double(number) {          //takes an array of numbers and doubles each number
//     return number * 2;
//   }
//   const numbers = [5, 2, 7, 6];
//   const doubled = numbers.map(double); //map() calls the function once for each item in the array, passing in the item. It then adds the return value from each function call to a new array, and finally returns the new array.
//   console.log(doubled); 


/*               filter                  */

// function cityLength(city) {
//     return city.length > 8;
//   }
//   const cities = ['London', 'Liverpool', 'Totnes', 'Edinburgh'];
//   const cityName = cities.filter(cityLength);     //takes an array of strings and returns an array containing just the strings that are greater than 8 characters long
//   console.log(cityName); 


/*        split()       */
var employees = "Sakthivel, Mahalakshmi , Divish ,Merlin ,Sri ,Vijay";
var arrEmp =console.log(employees.split(','));

// const dogNames = ['Rocket','Flash','Bella','Slugger'];
// console.log(dogNames.toString());                            //toSstring()

// console.log(dogNames.reverse());                             //reverse()



// const array1 = [1, 2, 3];
// array1.unshift(4, 5);           //unshift()
// console.log(array1);

// const months = ['March', 'Jan', 'Feb', 'Dec'];
// months.sort();                                      //sort()
// console.log(months);

                                               
// const array1 = [1, 2, 3, 4];
// console.log(array1.fill(0, 2, 4));                   //fill()
// console.log(array1.fill(5, 1));
// console.log(array1.fill(6));

