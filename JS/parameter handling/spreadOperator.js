//The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const numComb = [...num1, ...num2];
console.log(numComb);

//We can use the spread operator with objects too:

const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
  
  const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow'
  }
  
  const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
  console.log(myUpdatedVehicle);