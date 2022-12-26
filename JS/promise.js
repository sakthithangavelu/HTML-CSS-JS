
// var sum = 20;
// let sumValue = new Promise(function(resolve,reject)
// {
// if(sum = 20)
//     {
//         resolve("True");
//     }
// else
//     {
//         reject("False");
//     }
// });
// console.log(sumValue);


//Chaining the Promise with then() - The then() method is used with the callback when the promise is successfully fulfilled or resolved.

let sumValue = new Promise(function (resolve, reject) {
    resolve("Promise resolved");
});

// executes when promise is resolved successfully
sumValue
    .then(function successValue(result) {
        console.log(result);
    })
    //chaining multiple then() with promise
    .then(function successValue1() {
        console.log("You can call multiple functions this way(1)");
    })

    .then(function successValue2() {
        console.log("You can call multiple functions this way(2)");
    });

/*

//using catch()-The catch() method is used with the callback when the promise is rejected or if an error occurs.


let countValue = new Promise(function (resolve, reject) {
    reject('Promise rejected'); 
 });
 
 // executes when promise is resolved successfully
 countValue.then(
     function successValue(result) {
         console.log(result);
     },
  )
 
 // executes if there is an error
 .catch(
     function errorValue(result) {
         console.log(result);
     }
 );


 //finally() -  The finally() method gets executed when the promise is either resolved successfully or rejected.
// returns a promise
let countValue = new Promise(function (resolve, reject) {
    // could be resolved or rejected   
    resolve('Promise resolved'); 
});
// add other blocks of code
countValue.finally(
    function greet() {
        console.log('This code is executed.');
    }
);
*/