//Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.
function multiply(a, b = 1) {
    return a * b;
  }
  console.log(multiply(5, 2));
  console.log(multiply(5));

//example 2
  function multiply(a, b) {
    return a * b;
  }
  
  multiply(5, 2); 
  multiply(5); 