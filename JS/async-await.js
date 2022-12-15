// async () - We use the async keyword with a function to represent that the function is an asynchronous function. The async function returns a promise.
/*
async function sample() {
    console.log('Async function.');
    return Promise.resolve("Resolved");
}

sample().then(function(result)
{
    console.log(result)
});         //the sample() function is resolved and the then() method gets executed.
*/


//await keyword- used inside the async function to wait for the asynchronous operation
// a promise
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Promise resolved')
    }, 4000);
});

// async function
async function asyncFunc() {

    // wait until the promise resolves 
    let result = await promise;

    console.log(result);
    console.log('hello');
}

// calling the async function
asyncFunc();