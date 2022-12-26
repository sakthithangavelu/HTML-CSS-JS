//Destructing Arrays

const vehicles = ['mustang', 'f-150', 'expedition'];

// old way
// const car = vehicles[0];
// const truck = vehicles[1];
// const suv = vehicles[2];

//new way
var [car, truck, suv] = vehicles;
console.log (car);
console.log(truck);
console.log(suv);

//If we only want the car and suv we can simply leave out the truck but keep the comma
var [car,, suv] = vehicles;
console.log (car);
console.log(suv);

//Destructuring Objects
const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021,
    color: 'red',
    registration: {
        city: 'Houston',
        state: 'Texas',
        country: 'USA'
    }
}

myVehicle(vehicleOne)

function myVehicle({ model, registration: { state } }) {
    const message = 'My ' + model + ' is registered in ' + state + '.';
    console.log(message)
}