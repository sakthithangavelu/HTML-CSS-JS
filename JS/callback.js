// function
/*
function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

// callback function
function callMe() {
    console.log('I am callback function');
}

// passing function as an argument
greet('Peter', callMe);
*/

function MainFunction (name,callback){
    console.log("Hi"+ name);
   callback();
}
function CallBack() {
    console.log("Callback function demo");
}

MainFunction("Sakthi",CallBack);
